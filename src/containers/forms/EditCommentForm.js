import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"


class EditCommentForm extends Component {

    state = {
        message: this.props.currentComment.message
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCancel = () => {
        this.props.history.push("/inspiration")
    }

    handleSubmit = event => {
        event.preventDefault()
        const editUrl = `http://localhost:3000/api/v1/comments/${this.props.currentComment.id}`
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postBody = {
            message: this.state.message
        }
        let editConfig = {
            method: "PATCH",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(editUrl, editConfig).then(resp => resp.json()).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/inspiration"))

    }

    render() {
        
        return (
            this.props.currentComment.id ?
            <div className="content">
                <h1>Edit This Comment</h1>
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Comment: </label>
                    <br />
                    <br />
                    <textarea type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <button type="submit" value="Edit Comment">Edit Comment</button>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
            :
            <div className="content">
                <h1>Edit A Comment</h1>
                <h3>Please click the Inspiration tab to edit a comment on a post.</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents: state.events.allEvents,
        currentEvent: state.event.currentEvent,
        currentVenue: state.venue.currentVenue,
        currentComment: state.comment.currentComment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentForm));