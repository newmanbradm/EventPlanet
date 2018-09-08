import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddEventForm extends Component {

    state = {
        title: '',
        date: '',
        rainDate: '',
        description: '',
        contactDetails: '',
        budget: 0
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="content">
                <form className="add-event-form">
                    <br />
                    <h1>Add An Event</h1>
                    <label htmlFor="title">Event Title: </label>
                    <br />
                    <br />
                    <input type="text" name="title" id="title" value={this.state.title} onChange={this.onChange} />
                    <br />
                    <br />
                    <label htmlFor="date">Event Date: </label>
                    <br />
                    <br />
                    <input type="text" name="date" id="date" value={this.state.date} onChange={this.onChange} />
                    <br />
                    <br />
                    <label htmlFor="rainDate">Rain Date: </label>
                    <br />
                    <br />
                    <input type="text" name="rainDate" id="rainDate" value={this.state.rainDate} onChange={this.onChange} />
                    <br />
                    <br />
                    <label htmlFor="description">Event Description: </label>
                    <br />
                    <br />
                    <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.onChange}></textarea>
                    <br />
                    <br />
                    <label htmlFor="contactDetails">Contact Details: </label>
                    <br />
                    <br />
                    <textarea type="text" name="contactDetails" id="contactDetails" value={this.state.contactDetails} onChange={this.onChange}></textarea>
                    <br />
                    <br />
                    <label htmlFor="budget">Event Budget: </label>
                    <br />
                    <br />
                    <input type="number" name="budget" id="budget" value={this.state.budget} onChange={this.onChange} />
                    <br />
                    <br />
                    <input type="submit" value="Add Event"/>
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

export default connect(mapStateToProps)(AddEventForm);