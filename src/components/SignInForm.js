import React, { Component } from 'react'

import '../stylesheets/SignInForm.css'

export default class SignInForm extends Component {

  state = {
    formInput: ""
  }

  render() {
    return (
      <form className="sign-in-form">
        Sign In Form
      </form>
    )
  }
}
