import React, { Component } from 'react';
import { connect } from 'react-redux';
import Guest from '../components/Guest';
import { withRouter } from 'react-router-dom';
import { setEventsAction, setCurrentEventAction, setCurrentGuestAction } from '../actions';

const eventsUrl = "http://localhost:3000/api/v1/events"

class GuestList extends Component {

    renderGuests = () => {
        if (this.props.currentEvent.guests.length !== 0) {
            let sortedArray = this.props.currentEvent.guests.sort((a, b) => a.id - b.id)
            return sortedArray.map(guest => <Guest key={guest.id} guest={guest} editGuest={this.editGuest} deleteGuest={this.deleteGuest} />)
        } else {
            return <h1>This event does not have any guests at this time.</h1>
        }
    } 

    handleClick = () => {
        this.props.history.push("/add-guest")
    }

    editGuest = (guestObj) => {
        this.props.setCurrentGuest(guestObj)
        this.props.history.push('/edit-guest')
    }

    deleteGuest = (guestId) => {
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let eventGuestToDelete = this.props.currentEvent.event_guests.find(eventGuest => eventGuest.guest_id === guestId)
        let deleteUrl = `http://localhost:3000/api/v1/event_guests/${eventGuestToDelete.id}`
        return fetch(deleteUrl, {method: "DELETE"}).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data))
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Guests for ${this.props.currentEvent.title}`}</h1>
                <button onClick={this.handleClick}>Add Guest</button>
                <br />
                {this.renderGuests()}
            </div>
            :
            <div className="content">
                <h1>Please Select An Event</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent.currentEvent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj)),
        setCurrentGuest: (obj) => dispatch(setCurrentGuestAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuestList));
