import React, { Component } from 'react'

import '../stylesheets/ComponentForm.css'

export default class ComponentForm extends Component {

  state = {
    name: "",
    type: "",
    notes: ""
  }

  toggleForm = (event) => {
    if (event.target.className === "component-form-wrapper") {
      this.props.toggleForm()
    }
  }

  handleChange = (event) => {
    if (event.target.name === "name") {
      this.setState({
        name: event.target.value.replace(/\s/g, '')
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { parent, projectID, addComponent } = this.props

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        component: {
          ...this.state,
          project_id: projectID
        },
        parent_id: parent.id
      })
    }

    fetch("http://localhost:3000/components", request)
      .then(response => response.json())
      .then(component => {
        addComponent(component, parent.id)
        this.props.toggleForm()
      })
  }

  render() {
    const { name, type, notes } = this.state

    return (
      <div className="component-form-wrapper" onClick={this.toggleForm}>
        <form className="component-form" onSubmit={this.handleSubmit}>
          <h3>Add Component</h3>
          <div className="input-container">
            <input
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
            />
            <select name="type" value={type} onChange={this.handleChange} >
              <option value="">Select Type</option>
              <option value="Class">Class</option>
              <option value="Functional">Functional</option>
            </select>
            <textarea
              name="notes"
              value={notes}
              placeholder="Notes"
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" id="submit-btn" value="Create Component" />
        </form>
      </div>
    )
  }
}
