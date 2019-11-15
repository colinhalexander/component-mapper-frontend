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
        <p>SignInForm???</p>
        <button onClick={this.handleClick}>Go To User Page</button>
      </form>
    )
  }
}
