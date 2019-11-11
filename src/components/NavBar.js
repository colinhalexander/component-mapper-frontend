import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/NavBar.css'

export default function NavBar(props) {
  
  return (
    <header className="nav-bar">
      <Link className="nav-link" to="/how-to">How To</Link>
      <Link to="/">
        <hgroup className="logo">
          <img src="" alt="site logo"/>
          <h1>Component Mapper</h1>
        </hgroup>
      </Link>
      <Link className="nav-link" to="/user/:username">User Profile</Link>
    </header>
  )
}
