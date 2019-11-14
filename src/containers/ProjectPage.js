import React, { Component } from 'react'

import '../stylesheets/ProjectPage.css'
import ComponentLevel from '../components/ComponentLevel'

export default class ProjectPage extends Component {

  state = {
    project: {
      name: "Loading Project...",
      components: []
    }
  }
  
  componentDidMount() {
    const { project } = this.props.location.state || { project: { id: 1 } }

    fetch(`http://localhost:3000/projects/${project.id}`)
      .then(response => response.json())
      .then(project => this.setState({ project }))
  }

  render() {
    const { username } = this.props.match.params

    return (
      <div className="project-page">
        <h2>{this.state.project.name} by {username}</h2>
        <ComponentLevel components={this.state.project.components} level={0} />
      </div>
    )
  }
}
