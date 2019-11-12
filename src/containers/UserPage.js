import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class UserPage extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/projects")
      .then(response => response.json())
      .then(projects => this.setState({ projects }))
  }

  render() {
    const { username } = this.props.match.params

    const listProjects = () => {
      return this.state.projects.map((project, index) => {
        return (
          <Link
            key={index}
            to={`${username}/${this.toKebabCase(project.name)}`}
          >
            {project.name}
          </Link>
        )
      })
    }

    return (
      <div className="user-page">
        <NavBar />
        <main>
          <p>UserPage for <strong>{username}</strong></p>
          {listProjects()}
        </main>
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