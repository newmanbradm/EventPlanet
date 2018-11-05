import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const postUrl = "http://localhost:3000/api/v1/events"

class AddEventForm extends Component {

    state = {
        title: '',
        date: '',
        rainDate: '',
        description: '',
        contactDetails: '',
        budget: 0
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let postBody = {
            title: this.state.title,
            date: this.state.date, 
            rain_date: this.state.rainDate,
            description: this.state.description,
            contact_details: this.state.contactDetails,
            budget: this.state.budget,
            user_id: this.props.user.id
        }
        let postConfig = {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(postUrl, postConfig).then(resp => resp.json()).then((data) => this.props.setCurrentEvent(data)).then(() => fetch(postUrl).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/details"))) 
    }

    handleCancel = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="content">
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <br />
                    <h1>Add An Event</h1>
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
                    $<input type="number" name="budget" id="budget" value={this.state.budget} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type="submit" value="Add Event">Add Event</button>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.users.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (data) => dispatch(setCurrentEventAction(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEventForm));