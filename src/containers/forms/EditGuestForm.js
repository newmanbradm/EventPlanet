import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"


class EditGuestForm extends Component {

    state = {
        name: this.props.currentGuest.name,
        email: this.props.currentGuest.email,
        phoneNumber: this.props.currentGuest.phone_number
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const editUrl = `http://localhost:3000/api/v1/guests/${this.props.currentGuest.id}`
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postBody = {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phoneNumber
        }
        let editConfig = {
            method: "PATCH",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(editUrl, editConfig).then(resp => resp.json()).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/guests"))

    }

    handleCancel = () => {
        this.props.history.push("/guests")
    }

    render() {
        
        return (
            this.props.currentGuest.id ?
            <div className="content">
                <h1>Edit This Venue</h1>
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <br />
                    <br />
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <br />
                    <br />
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <br />
                    <br />
                    <input type="text" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Edit Guest"/>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
            :
            <div className="content">
                <h1>Edit A Guest</h1>
                <h3>Please click the Guests tab to edit a guest.</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents: state.events.allEvents,
        currentEvent: state.event.currentEvent,
        currentGuest: state.guest.currentGuest
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditGuestForm));