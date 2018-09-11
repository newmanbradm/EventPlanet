import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"


class AddPostForm extends Component {

    state = {
        imageUrl: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postUrl = "http://localhost:3000/api/v1/posts"
        let postBody = {
            image_url: this.state.imageUrl,
            event_id: this.props.currentEvent.id
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

    handleCancel = () => {
        this.props.history.push("/inspiration")
    }

    render() {
        
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>Add A Post</h1>
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="imageUrl">Image URL: </label>
                    <br />
                    <br />
                    <input type="text" name="imageUrl" id="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Add Post"/>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
            :
            <div className="content">
                <h1>Add A Post</h1>
                <h3>Please select an event to add a post.</h3>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPostForm));