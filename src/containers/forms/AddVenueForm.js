import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"


class AddVenueForm extends Component {

    state = {
        name: '',
        imageUrl: '',
        address: ''
    }

    addEventVenue = (eventId, venueId) => {
        let postUrl = "http://localhost:3000/api/v1/event_venues"
        let postBody = {
            event_id: eventId,
            venue_id: venueId
        }
        let postConfig = {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(postUrl, postConfig).then(resp => resp.json())
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postUrl = "http://localhost:3000/api/v1/venues"
        let postBody = {
            name: this.state.name,
            image_url: this.state.imageUrl,
            address: this.state.address
        }
        let postConfig = {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(postUrl, postConfig).then(resp => resp.json()).then(data => data.id).then(id => this.addEventVenue(this.props.currentEvent.id, id)).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/venues"))

    }

    handleCancel = () => {
        this.props.history.push("/venues")
    }

    render() {
        
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>Add A Venue</h1>
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name of Venue: </label>
                    <br />
                    <br />
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="imageUrl">Image URL: </label>
                    <br />
                    <br />
                    <input type="text" name="imageUrl" id="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="address">Address: </label>
                    <br />
                    <br />
                    <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type="submit" value="Add Venue">Add Venue</button>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
            :
            <div className="content">
                <h1>Add A Venue</h1>
                <h3>Please select an event to add a venue.</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents: state.events.allEvents,
        currentEvent: state.event.currentEvent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddVenueForm));