import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEventsAction } from '../actions';
import EventTab from '../components/EventTab';

class EventList extends Component {

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/events').then(resp => resp.json()).then(data => this.props.setEvents(data))
    }

    renderEventTabs = () => {
        return this.props.allEvents.map(event => <EventTab key={event.id} event={event} />)
    }

    render() {
        return (
            <div className="event-list">
                <div className="create-event">
                    <h4>Add Event +</h4>
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
        setEvents: (data) => dispatch(setEventsAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
