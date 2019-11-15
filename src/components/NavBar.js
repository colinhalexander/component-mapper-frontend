import React from 'react'

import '../stylesheets/NavBar.css'

export default function NavBar({ history }) {
  
  const handleClick = () => {
    history.push("/")
  }

  return (
    <header className="nav-bar">
      <p>Fake Link</p>
      <hgroup className="logo" onClick={handleClick}>
        <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt="site logo"/>
        <h1>Component Mapper</h1>
      </hgroup>
      <p>Also Fake</p>
    </header>
  )
}
