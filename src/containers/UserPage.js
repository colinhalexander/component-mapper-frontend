import React, { Component } from 'react'

export default class UserPage extends Component {
  render() {
    const { username } = this.props.match.params
    return (
      <div className="user-page">
        UserPage for <strong>{username}</strong>
      </div>
    )
  }
}
