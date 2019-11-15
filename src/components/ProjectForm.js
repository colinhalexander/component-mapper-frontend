import React, { Component } from 'react'

import '../stylesheets/ProjectForm.css'

export default class ProjectForm extends Component {
  
  state = {
    name: "",
    description: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // post to backend
  }
  
  render() {
    const { name, description } = this.state

    return (
      <div className="project-form-wrapper" onClick={this.props.hideForm}>
        <form className="project-form" onSubmit={this.handleSubmit}>
          <h3>New Project</h3>
          <div className="project-form-inputs">
            <input name="name" value={name} placeholder="Name" />
            <input name="description" value={description} placeholder="Description" />
            <input type="submit" value="Create Project" id="submit-new-project" />
          </div>
        </form>
      </div>
    )
  }
}
