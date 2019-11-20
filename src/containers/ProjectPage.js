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
      parent: {}
    }
  }

  findParentAndAddChild = (components, newComponent, parentID) => {
    components.forEach(component => {
      if (component.id !== parentID) {
        if (component.children) {
            this.findParentAndAddChild(component.children, newComponent, parentID)
        }
      } else {
        if (component.children) {
          component.children.push(newComponent)
        } else {
          component.children = [newComponent]
        }
      }
    })

    return components
  }

  addComponent = (newComponent, parentID) => {
    const { components } = this.state.project
    const componentsCopy = this.findParentAndAddChild(components, newComponent, parentID)

    this.setState((prevState) => {
      return {
        project: {
          ...prevState.project,
          components: componentsCopy
        }
      }
    })
  }

  toggleForm = (parent) => {
    if (!this.state.form.show && parent) {
      this.setState({
        form: {
          parent,
          show: true
        }
      })
    } else {
      this.setState({
        form: {
          show: false,
          parent: {}
        }
      })
    }
  }
  
  componentDidMount() {
    const { project } = this.props.location.state || { project: { id: 1 } }

    if (project) {
      fetch(`https://component-mapper.herokuapp.com/projects/${project.id}`)
        .then(response => response.json())
        .then(project => this.setState({ project }))
    }
  }

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    const { username } = this.props.match.params
    const { history } = this.props
    const { project, showAll, form } = this.state
    
    return (
      <div className="project-page">
        <header>
          <h2>{project.name} by {username}</h2>
          <div className="project-menu">
            <p onClick={() => history.goBack()}>Back</p>
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
          addComponent={this.addComponent}
        />
        {
          form.show
            ? <ComponentForm
                toggleForm={this.toggleForm}
                parent={form.parent}
                projectID={project.id}
                addComponent={this.addComponent}
              /> 
            : ""}
      </div>
    )
  }
}
