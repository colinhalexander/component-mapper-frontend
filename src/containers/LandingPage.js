import React from 'react'

import '../stylesheets/LandingPage.css'

import SignInForm from '../components/SignInForm'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function LandingPage({ history }) {
  return (
    <div className="landing-page">
      <NavBar history={history} />
      <main>
        <SignInForm history={history} />
      </main>
      <Footer />
    </div>
  )
}
