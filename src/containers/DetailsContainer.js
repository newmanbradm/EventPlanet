import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetails from '../components/EventDetails';
import { setEventsAction, setCurrentEventAction } from '../actions';
import { withRouter } from 'react-router-dom';

class DetailsContainer extends Component {

    editEvent = () => {
        this.props.history.push("/edit-event")
    }

    deleteEvent = () => {
        let deleteUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let deleteConfig = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(deleteUrl, deleteConfig).then(() => fetch("http://localhost:3000/api/v1/events").then(resp => resp.json()).then(data => this.props.setEvents(data))).then(() => this.props.setCurrentEvent({}))
    }

    render() {
        return (
            <div className="content">
                <EventDetails event={this.props.currentEvent} editEvent={this.editEvent} deleteEvent={this.deleteEvent} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent.currentEvent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsContainer));
