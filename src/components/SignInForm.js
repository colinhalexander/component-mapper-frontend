import React, { Component } from 'react'

export default class SignInForm extends Component {

  state = {
    formInput: ""
  }
  
  handleClick = () => {
    window.location.href = "http://localhost:3000/auth"
  }

  render() {
    return (
      <div className="sign-in-form">
        <button id="signin-btn" onClick={this.handleClick}>Sign In With GitHub</button>
      </div>
    )
  }
}
