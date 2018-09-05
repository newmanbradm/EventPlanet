import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import EventList from '../containers/EventList';
import Navbar from '../containers/Navbar'
import LoginForm from '../containers/LoginForm';
import DetailsContainer from '../containers/DetailsContainer';
import VenueContainer from '../containers/VenueContainer';
import GuestList from '../containers/GuestList';
import SupplyList from '../containers/SupplyList';
import PostList from '../containers/PostList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <img src="planet.png" className="App-logo" alt="logo" />
          <h1 className="App-title">EventPlanet</h1>
        </header>
        <EventList />
        <Navbar />
        <Switch className='content'>
          <Route exact path='/' component={LoginForm} />
          <Route path='/details' component={DetailsContainer} />
          <Route path='/venues' component={VenueContainer} />
          <Route path='/guests' component={GuestList} />
          <Route path='/supplies' component={SupplyList} />
          <Route path='/inspiration' component={PostList} />
        </Switch>
      </div>
    );
  }
}

export default App;
