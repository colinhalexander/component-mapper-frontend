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
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    
  }

  render() {
    const { name, type, notes } = this.state
    console.log(this.props.component)

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
            <div className="">
              <select name="type" value={type} onChange={this.handleChange} >
                <option value="">Select Type</option>
                <option value="Class">Class</option>
                <option value="Functional">Functional</option>
              </select>
            </div>
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
