import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './stylesheets/App.css';

import UserPage from './containers/UserPage';
import LandingPage from './containers/LandingPage';
import ProjectPage from './containers/ProjectPage';

export default class App extends Component {

  state = {
    user: null
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            exact path="/user/:username"
            render={(props) => <UserPage {...props} user={this.state.user} />}
          />
          <Route
            path="/user/:username/:project"
            render={(props) => <ProjectPage {...props} />}
          />
          <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        </div>
      </Router>
    )
  }
}