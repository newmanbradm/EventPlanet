import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"


class EditVenueForm extends Component {

    state = {
        name: this.props.currentVenue.name,
        imageUrl: this.props.currentVenue.image_url,
        address: this.props.currentVenue.address
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const editUrl = `http://localhost:3000/api/v1/venues/${this.props.currentVenue.id}`
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postBody = {
            name: this.state.name,
            image_url: this.state.imageUrl,
            address: this.state.address
        }
        let editConfig = {
            method: "PATCH",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(editUrl, editConfig).then(resp => resp.json()).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/venues"))

    }

    render() {
        
        return (
            this.props.currentVenue.id ?
            <div className="content">
                <h1>Edit This Venue</h1>
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
                    <input type="submit" value="Edit Venue"/>
                </form>
            </div>
            :
            <div className="content">
                <h1>Edit A Venue</h1>
                <h3>Please click the Venues tab to edit a venue.</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents: state.events.allEvents,
        currentEvent: state.event.currentEvent,
        currentVenue: state.venue.currentVenue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditVenueForm));