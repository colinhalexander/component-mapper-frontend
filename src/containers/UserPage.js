import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/UserPage.css'
import plusIcon from '../media/plus-icon.png'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectForm from '../components/ProjectForm'

export default class UserPage extends Component {

  state = {
    projects: [],
    showForm: false
  }

  componentDidMount() {
    if (!this.props.user) {
      const { username } = this.props.match.params
  
      fetch(`http://localhost:3000/users/${username}`)
        .then(response => response.json())
        .then(user => {
          console.log(user)
          const { projects } = user
          
          this.props.setUser(user)
          this.setState({ projects })
        })
    } else { // necessary?
      const { projects } = this.props.user
      this.setState({ projects })
    }
  }

  toggleForm = (event) => {
    if (event) {
      if (event.target.className === "project-form-wrapper"
          || event.target.id === "add-project") {
        this.setState({
          showForm: !this.state.showForm
        })
      }
    } else if (!event) {
      this.setState({
        showForm: false
      })
    }
  }

  addProject = (project) => {
    const projectsCopy = [...this.state.projects]

    projectsCopy.push(project)

    this.setState({
      projects: projectsCopy
    })
  }
  
  listProjects = () => {
    const { username } = this.props.match.params

    return this.state.projects.map((project, index) => {
        return (
          <div className="user-project" key={index}>
            <div className="project-description">
              <h3 className="project-title">{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <Link
              className="project-link"
              to={{
                pathname: `${username}/${this.toKebabCase(project.name)}`,
                state: { project }
              }}
            >
              <img src="http://nkmediasolutions.com/images/Icon-arrow-right-white.png" alt="arrow icon" className="arrow-icon" />
            </Link>
          </div>
        )
      })
    }

  render() {
    const { showForm } = this.state,
          { user } = this.props,
          { username, bio, display_name, avatar_url } = user || {}

    return (
      <div className="user-page">
        <NavBar history={this.props.history} isLoggedIn={user ? true : false} />
        <main>
          <section className="user-profile">
            <div className="user-header">
              <p>{username}</p>
            </div>
            <div className="user-info-projects-wrapper">
              <div className="user-info">
                <div id="user-avatar">
                  <img src={avatar_url} alt="avatar" />
                </div>
                <p>{display_name}</p>
                <br />
                <p>Bio: {bio}</p>
              </div>
              <div className="user-projects">
                <div className="projects-header">
                  <h3>Projects</h3>
                  <img src={plusIcon} alt="add-project"
                    id="add-project"
                    onClick={this.toggleForm}
                  />
                </div>
                <div className="projects-list">
                  {this.listProjects()}
                </div>
              </div>
            </div>
          </section>
        </main>
        {
          showForm
            ? <ProjectForm hideForm={this.toggleForm} addProject={this.addProject} />
            : ""
        }
        <Footer />
      </div>
    )
  }

  toKebabCase = (string) => {
    return string.split(' ')
      .map(word => word.toLowerCase())
      .join('-')
  }
}