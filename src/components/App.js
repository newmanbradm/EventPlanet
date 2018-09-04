import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import EventList from '../containers/EventList';
import LoginForm from '../containers/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="planet.png" className="App-logo" alt="logo" />
          <h1 className="App-title">EventPlanet</h1>
        </header>
        <EventList />
        <Switch>
          <Route exact path='/' component={LoginForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
