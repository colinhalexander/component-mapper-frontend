import React, { Component } from 'react'

export default class ProjectPage extends Component {
  render() {
    const { username, project } = this.props.match.params

    return (
      <div className="project-page">
        Project Page for {username}'s project: {project}
      </div>
    )
  }
}
