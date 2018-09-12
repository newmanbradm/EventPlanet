import React, { Component } from 'react';
import { connect } from 'react-redux';
import VenueDetails from '../components/VenueDetails';
import { withRouter } from 'react-router-dom';
import { setEventsAction, setCurrentEventAction, setCurrentVenueAction } from '../actions';

const eventsUrl = "http://localhost:3000/api/v1/events"

class VenueContainer extends Component {

    renderVenueDetails = () => {
        if (this.props.currentEvent.venues.length !== 0) {
            let sortedArray = this.props.currentEvent.venues.sort((a, b) => a.id - b.id)
            return sortedArray.map(venue => <VenueDetails key={venue.id} venue={venue} editVenue={this.editVenue} deleteVenue={this.deleteVenue}/>)
        } else {
            return <h1>This event does not have any venues at this time.</h1>
        }
    }

    handleClick = () => {
        this.props.history.push('/add-venue')
    }

    editVenue = (venueObj) => {
        this.props.setCurrentVenue(venueObj)
        this.props.history.push('/edit-venue')
    }

    deleteVenue = (venueId) => {
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let eventVenueToDelete = this.props.currentEvent.event_venues.find(eventVenue => eventVenue.venue_id === venueId)
        let deleteUrl = `http://localhost:3000/api/v1/event_venues/${eventVenueToDelete.id}`
        return fetch(deleteUrl, {method: "DELETE"}).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data))
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Venue(s) for ${this.props.currentEvent.title}`}</h1>
                <button onClick={this.handleClick}>Add Venue</button>
                <div className="venue-area">
                {this.renderVenueDetails()}
                </div>
            </div>
            :
            <div className="content">
                <h1>Please Select Or Add An Event</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.event.currentEvent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj)),
        setCurrentVenue: (obj) => dispatch(setCurrentVenueAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VenueContainer));
