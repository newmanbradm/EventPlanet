import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';

const eventsUrl = "http://localhost:3000/api/v1/events"

class EditEventForm extends Component {
    
    state = {
        title: this.props.currentEvent.title,
        date: this.props.currentEvent.date,
        rainDate: this.props.currentEvent.rain_date,
        description: this.props.currentEvent.description,
        contactDetails: this.props.currentEvent.contact_details,
        budget: this.props.currentEvent.budget
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let editUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let editBody = {
            title: this.state.title,
            date: this.state.date, 
            rain_date: this.state.rainDate,
            description: this.state.description,
            contact_details: this.state.contactDetails,
            budget: this.state.budget
        }
        let editConfig = {
            method: "PATCH",
            body: JSON.stringify(editBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(editUrl, editConfig).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/details"))) 
    }

    handleCancel = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="content">
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <br />
                    <h1>Edit {this.props.currentEvent.title}</h1>
                    <label htmlFor="title">Event Title: </label>
                    <br />
                    <br />
                    <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="date">Event Date: </label>
                    <br />
                    <br />
                    <input type="text" name="date" id="date" value={this.state.date} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="rainDate">Rain Date: </label>
                    <br />
                    <br />
                    <input type="text" name="rainDate" id="rainDate" value={this.state.rainDate} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="description">Event Description: </label>
                    <br />
                    <br />
                    <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    <br />
                    <br />
                    <label htmlFor="contactDetails">Contact Details: </label>
                    <br />
                    <br />
                    <textarea type="text" name="contactDetails" id="contactDetails" value={this.state.contactDetails} onChange={this.handleChange}></textarea>
                    <br />
                    <br />
                    <label htmlFor="budget">Event Budget: </label>
                    <br />
                    <br />
                    <input type="number" name="budget" id="budget" value={this.state.budget} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Edit Event"/>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
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
        setCurrentEvent: (data) => dispatch(setCurrentEventAction(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
