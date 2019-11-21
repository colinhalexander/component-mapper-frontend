import React from 'react'

import '../stylesheets/LandingPage.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function LandingPage({ history, user }) {

  return (
    <div className="landing-page">
      <NavBar history={history} isLoggedIn={user ? true : false} username={user ?user.username : ""} />
      <main>
        <div className="welcome">
          <h3>Welcome{user ? `, ${user.username}` : ""}!</h3>
          <p>Component Mapper is a tool for planning React projects. Sign in with GitHub to get started (please wait about 30 seconds before clicking the sign-in link to give the backend time to wake up). Once you've logged in, you will be redirected to your user page where you can create new projects and begin to work on them. Watch the demo below to see the Component Mapper tool in action.</p>
          <p>[--Demo forthcoming--]</p>
          <h2>About</h2>
          <p>This app was designed using React, Node, and Express. It uses the <a href="http://www.passportjs.org/">Passport.js</a> library to manage OAuth 2.0 with GitHub.</p>
          <p>Several features of the app are still in development. For now, users aren't able to access the See Details/Edit or Delete Component options on the component menu. A feature is also being developed which will allow users to export a project to GitHub, creating a new repo with a <a href="https://create-react-app.dev/">create-react-app</a> template and individual files for each component.</p>
          <p>Check out the GitHub repos for this project <a href="https://github.com/colinhalexander/component-mapper-frontend">here</a> and <a href="https://github.com/colinhalexander/component-mapper-backend">here</a></p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
