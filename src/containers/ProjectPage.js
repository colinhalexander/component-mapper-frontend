import React, { Component } from 'react'

import '../stylesheets/ProjectPage.css'
import ComponentLevel from '../components/ComponentLevel'

export default class ProjectPage extends Component {

  state = {
    project: {
      name: "Component Mapper",
      description: "It maps components for React projects",
      components: [{
        name: "App",
        type: "class",
        notes: "",
        children: [{
          name: "LandingPage",
          type: "class",
          notes: "",
          children: [{
            name: "NavBar",
            type: "functional",
            notes: ""
          }, {
            name: "Footer",
            type: "functional",
            notes: ""
          }]
        }, {
          name: "HowToPage",
          type: "functional",
          notes: "",
          children: [{
            name: "NavBar",
            type: "functional",
            notes: ""
          }, {
            name: "Footer",
            type: "functional",
            notes: ""
          }]
        }, {
          name: "UserPage",
          type: "class",
          notes: "",
          children: [{
            name: "NavBar",
            type: "functional",
            notes: ""
          }, {
            name: "Footer",
            type: "functional",
            notes: ""
          }]
        }, {
          name: "ProjectPage",
          type: "class",
          notes: "",
          children: [{
            name: "ComponentLevel",
            type: "class",
            notes: "",
            children: [{
              name: "Component",
              type: "class",
              notes: "",
            }]
          }, {
            name: "ComponentForm",
            type: "class",
            notes: "",
          }]
        }]
      }]
    }
  }
  
  // componentDidMount() {
  //   const { project } = this.props.location.state

  //   fetch(`http://localhost:3000/projects/${project.id}`)
  //     .then(response => response.json())
  //     .then(project => this.setState({ project }))
  // }

  render() {
    const { username } = this.props.match.params

    return (
      <div className="project-page">
        <h2>{this.state.project.name} by {username}</h2>
        <ComponentLevel components={this.state.project.components} />
      </div>
    )
  }
}
