import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEventsAction, setCurrentEventAction } from '../actions';
import EventTab from '../components/EventTab';
import { withRouter } from 'react-router-dom';

class EventList extends Component {

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/events').then(resp => resp.json()).then(data => this.props.setEvents(data))
    }

    renderEventTabs = () => {
        return this.props.allEvents.map(event => <EventTab key={event.id} event={event} />)
    }

    handleClick = () => {
        this.props.history.push('/add-event')
        this.props.setCurrentEvent({})
    }

    render() {
        return (
            <div className="event-list">
                <div className="create-event" onClick={this.handleClick}>
                    <h3>Add Event +</h3>
                    <hr />
                    <hr />
                </div>
                {this.renderEventTabs()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents: state.events.allEvents
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventList));
