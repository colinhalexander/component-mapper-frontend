import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import UserPage from './containers/UserPage';
import HowToPage from './components/HowToPage';
import LandingPage from './containers/LandingPage';

export default class App extends Component {

  state = {
    user: null
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/user/:username" component={UserPage} />
          <Route path="/how-to" component={HowToPage} />
          <Route exact path="/" render={() => <LandingPage />} />
        </div>
      </Router>
    )
  }
}