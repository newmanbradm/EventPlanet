import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setEventsAction, setCurrentEventAction } from '../../actions';
import { withRouter } from 'react-router-dom'

const eventsUrl = "http://localhost:3000/api/v1/events"


class AddSupplyForm extends Component {

    state = {
        name: '',
        price: 0,
        storeUrl: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let postUrl = "http://localhost:3000/api/v1/supplies"
        let postBody = {
            name: this.state.name,
            price: this.state.price,
            store_url: this.state.storeUrl,
            event_id: this.props.currentEvent.id
        }
        let postConfig = {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(postUrl, postConfig).then(resp => resp.json()).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data)).then(this.props.history.push("/supplies"))

    }

    handleCancel = () => {
        this.props.history.push("/supplies")
    }

    render() {
        
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>Add A Supply</h1>
                <form className="add-event-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name of Supply: </label>
                    <br />
                    <br />
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="price">Price: </label>
                    <br />
                    <br />
                    <input type="number" name="price" id="price" value={this.state.price} onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="storeUrl">Store URL: </label>
                    <br />
                    <br />
                    <input type="text" name="storeUrl" id="storeUrl" value={this.state.storeUrl} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type="submit" value="Add Supply">Add Supply</button>
                    &nbsp;
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
            :
            <div className="content">
                <h1>Add A Supply</h1>
                <h3>Please select an event to add a supply.</h3>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddSupplyForm));