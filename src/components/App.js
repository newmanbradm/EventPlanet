import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import EventList from '../containers/EventList';
import Navbar from '../containers/Navbar'
import LoginForm from '../containers/forms/LoginForm';
import DetailsContainer from '../containers/DetailsContainer';
import VenueContainer from '../containers/VenueContainer';
import GuestList from '../containers/GuestList';
import SupplyList from '../containers/SupplyList';
import PostList from '../containers/PostList';
import AddEventForm from '../containers/forms/AddEventForm';
import { setUsersAction } from '../actions';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EditEventForm from '../containers/forms/EditEventForm';
import AddVenueForm from '../containers/forms/AddVenueForm';
import EditVenueForm from '../containers/forms/EditVenueForm';
import AddGuestForm from '../containers/forms/AddGuestForm';
import EditGuestForm from '../containers/forms/EditGuestForm';
import AddSupplyForm from '../containers/forms/AddSupplyForm';
import EditSupplyForm from '../containers/forms/EditSupplyForm';
import AddPostForm from '../containers/forms/AddPostForm';
import AddCommentForm from '../containers/forms/AddCommentForm';
import EditCommentForm from '../containers/forms/EditCommentForm';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users').then(resp => resp.json()).then(data => this.props.setUsers(data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <img src="planet.png" className="App-logo" alt="logo" />
          <h1 className="App-title">EventPlanet</h1>
          <h4>Just Plan It!</h4>
        </header>
        <EventList />
        <Navbar />
        <Switch className='content'>
          <Route exact path='/' component={DetailsContainer} />
          <Route path='/details' component={DetailsContainer} />
          <Route path='/venues' component={VenueContainer} />
          <Route path='/guests' component={GuestList} />
          <Route path='/supplies' component={SupplyList} />
          <Route path='/inspiration' component={PostList} />
          <Route exact path='/add-event' component={AddEventForm} />
          <Route exact path='/edit-event' component={EditEventForm} />
          <Route exact path='/add-venue' component={AddVenueForm} />
          <Route exact path='/edit-venue' component={EditVenueForm} />
          <Route exact path='/add-guest' component={AddGuestForm} />
          <Route exact path='/edit-guest' component={EditGuestForm} />
          <Route exact path='/add-supply' component={AddSupplyForm} />
          <Route exact path='/edit-supply' component={EditSupplyForm} />
          <Route exact path='/add-post' component={AddPostForm} />
          <Route exact path='/add-comment' component={AddCommentForm} />
          <Route exact path='/edit-comment' component={EditCommentForm} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.users.allUsers,
    user: state.users.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsers: (data) => dispatch(setUsersAction(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
