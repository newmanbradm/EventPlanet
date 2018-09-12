import React, { Component } from 'react';
import { connect } from 'react-redux';
import Supply from '../components/Supply';
import { withRouter } from 'react-router-dom';
import { setEventsAction, setCurrentEventAction, setCurrentSupplyAction } from '../actions';

const eventsUrl = "http://localhost:3000/api/v1/events"

class SupplyList extends Component {

    renderSupplies = () => {
        if (this.props.currentEvent.supplies.length !== 0) {
            let sortedArray = this.props.currentEvent.supplies.sort((a, b) => a.id - b.id)
            return sortedArray.map(supply => <Supply key={supply.id} supply={supply} editSupply={this.editSupply} deleteSupply={this.deleteSupply} />)
        } else {
            return <h1>This event does not have any supplies at this time.</h1>
        }
    }

    findTotal = () => {
        if (this.props.currentEvent.supplies.length !== 0) {
            let roundedArray = this.props.currentEvent.supplies.map(supply => parseFloat(supply.price.toFixed(2)))
            return roundedArray.reduce((total, num) => total + num)
        } else {
            return 0
        }
    }

    handleClick = () => {
        this.props.history.push("/add-supply")
    }

    editSupply = (supplyObj) => {
        this.props.setCurrentSupply(supplyObj)
        this.props.history.push('/edit-supply')
    }

    deleteSupply = (supplyId) => {
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let deleteUrl = `http://localhost:3000/api/v1/supplies/${supplyId}`
        return fetch(deleteUrl, {method: "DELETE"}).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data))
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Supplies for ${this.props.currentEvent.title}`}</h1>
                <button onClick={this.handleClick}>Add Supply</button>
                <br />
                <br />
                {this.renderSupplies()}
                <div className="budget">
                    <h4>Event Budget: {`$${this.props.currentEvent.budget.toFixed(2)}`}</h4>
                    <h4>Total of Supplies: {`$${this.findTotal()}`}</h4>
                    <h4> Remaining: {
                        `$${(this.props.currentEvent.budget.toFixed(2) - this.findTotal()).toFixed(2)}`
                    } </h4>
                </div>
            </div>
            :
            <div className="content">
                <h1>Please Select Or Add An Event</h1>
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
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj)),
        setCurrentSupply: (obj) => dispatch(setCurrentSupplyAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SupplyList));
