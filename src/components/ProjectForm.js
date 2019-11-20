import React, { Component } from 'react'

import '../stylesheets/ProjectForm.css'

export default class ProjectForm extends Component {
  
  state = {
    name: "",
    description: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { hideForm, addProject, userID } = this.props

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...this.state,
        user_id: userID
      })
    }

    fetch("https://component-mapper.herokuapp.com/projects", request)
      .then(response => response.json())
      .then(newProject => {
        
        addProject(newProject)
        hideForm()
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    const { name, description } = this.state

    return (
      <div className="project-form-wrapper" onClick={this.props.hideForm}>
        <form className="project-form" onSubmit={this.handleSubmit}>
          <h3>New Project</h3>
          <div className="project-form-inputs">
            <input
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              name="description"
              value={description}
              placeholder="Description"
              onChange={this.handleChange}
            />
            <input type="submit" value="Create Project" id="submit-new-project" />
          </div>
        </form>
      </div>
    )
  }
}
