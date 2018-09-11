import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"

class AddCommentForm extends Component {

    state = {
        message: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postUrl = "http://localhost:3000/api/v1/comments"
        let postBody = {
            message: this.state.message,
            post_id: this.props.currentPost.id
        }
        let postConfig = {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(postUrl, postConfig).then(resp => resp.json()).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/inspiration"))
    }

    render() {
        
        return (
            this.props.currentPost.id ?
            <div className="content">
                <h1>Add A Comment</h1>
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Comment: </label>
                    <br />
                    <br />
                    <textarea type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <input type="submit" value="Add Comment"/>
                </form>
            </div>
            :
            <div className="content">
                <h1>Add A Comment</h1>
                <h3>Please click the Inspiration tab to write a comment on a post.</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents: state.events.allEvents,
        currentEvent: state.event.currentEvent,
        currentPost: state.post.currentPost
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCommentForm));