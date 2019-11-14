import React, { Component } from 'react'

import '../stylesheets/ProjectPage.css'

import ComponentLevel from '../components/ComponentLevel'
import ComponentForm from '../components/ComponentForm'

export default class ProjectPage extends Component {

  state = {
    project: {
      name: "Loading Project...",
      components: [{}]
    },
    showAll: true,
    form: {
      show: false,
      component: {}
    }
  }

  toggleForm = (component) => {
    if (!this.state.form.show && component) {
      this.setState({
        form: {
          component,
          show: true
        }
      })
    } else {
      this.setState({
        form: {
          show: false,
          component: {}
        }
      })
    }
  }
  
  componentDidMount() {
    const { project } = this.props.location.state || { project: { id: 1 } }

    if (project) {
      fetch(`http://localhost:3000/projects/${project.id}`)
        .then(response => response.json())
        .then(project => this.setState({ project }))
    }
  }

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    const { username } = this.props.match.params
    const { project, showAll, form } = this.state
    

    return (
      <div className="project-page">
        <header>
          <h2>{project.name} by {username}</h2>
          <div className="project-menu">
            <p onClick={this.toggleShowAll}>
              {showAll ? "Show Only Active Components" : "Show All"}
            </p>
          </div>
        </header>
        <ComponentLevel
          components={project.components}
          level={0}
          showAll={showAll}
          toggleForm={this.toggleForm}
        />
        {form.show ? <ComponentForm toggleForm={this.toggleForm} component={form.component} projectID={project.id} /> : ""}
      </div>
    )
  }
}
