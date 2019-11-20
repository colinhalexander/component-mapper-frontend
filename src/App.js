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

  setUser = (user) => {
    this.setState({ user })
  }
  
  render() {
    const { user } = this.state

    return (
      <Router>
        <div className="App">
          <Route 
            exact path="/users/:username"
            render={
              (props) => <UserPage
                {...props}
                user={user}
                setUser={this.setUser}
              />
            }
          />
          <Route
            path="/users/:username/:project"
            render={(props) => <ProjectPage {...props} />}
          />
          <Route exact path="/" render={(props) => <LandingPage {...props} user={user} />} />
        </div>
      </Router>
    )
  }
}