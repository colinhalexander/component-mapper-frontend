import React, { Component } from 'react'

export default class SignInForm extends Component {

  state = {
    formInput: ""
  }
  
  handleClick = () => {
    this.props.history.push("/user/example-user")
  }

  render() {
    return (
      <form className="sign-in-form">
        <h3>Sign In</h3>
        <div className="signin-form-inputs">
          <input name="username" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button id="signin-btn" onClick={this.handleClick}>Log In</button>
        </div>
      </form>
    )
  }
}
