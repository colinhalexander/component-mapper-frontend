import React, { Component } from 'react'

import '../stylesheets/LandingPage.css'

import SignInForm from '../components/SignInForm'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <NavBar />
        <main>
          <SignInForm />
        </main>
        <Footer />
      </div>
    )
  }
}
