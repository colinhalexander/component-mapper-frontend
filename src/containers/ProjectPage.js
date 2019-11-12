import React, { Component } from 'react'

export default class ProjectPage extends Component {

  state = {
    project: {}
  }
  
  componentDidMount() {
    const { project } = this.props.location.state

    fetch(`http://localhost:3000/projects/${project.id}`)
      .then(response => response.json())
      .then(project => this.setState({ project }))
  }

  render() {
    const { username } = this.props.match.params

    return (
      <div className="project-page">
        Project Page for {username}'s project: {this.state.project.name}
      </div>
    )
  }
}
