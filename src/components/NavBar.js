import React from 'react'

import '../stylesheets/NavBar.css'

export default function NavBar({ history, isLoggedIn, username }) {

  const goHome = () => { history.push("/") }
  const goToUserPage = () => { history.push(`/users/${username}`) }
  const goToGitHub = () => {
    window.location.href = "https://component-mapper.herokuapp.com/auth"
  }

  return (
    <header className="nav-bar">
      <hgroup className="logo" onClick={goHome}>
        <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt="site logo"/>
        <h1>Component Mapper</h1>
      </hgroup>
      {isLoggedIn ? <p onClick={goToUserPage}>{username}</p> : <p onClick={goToGitHub}>Sign In With GitHub</p>}
    </header>
  )
}
