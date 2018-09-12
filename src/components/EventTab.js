import React, { Component } from 'react';
import { setCurrentEventAction } from '../actions';
import { connect } from 'react-redux'

class EventTab extends Component {

    render() {

        return (
            this.props.currentEvent.id !== this.props.event.id ?
            <div className="event-tab" onClick={() => this.props.setCurrentEvent(this.props.event)}>
            <h4>{this.props.event.title}</h4>
            <h5>{this.props.event.date}</h5>
            </div>
            :
            <div className="selected-event-tab" onClick={() => this.props.setCurrentEvent(this.props.event)}>
            <h4>{this.props.event.title}</h4>
            <h5>{this.props.event.date}</h5>
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
        setCurrentEvent: (eventObj) => {
            dispatch(setCurrentEventAction(eventObj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventTab);
