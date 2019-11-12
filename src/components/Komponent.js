import React, { Component } from 'react'

export default class Komponent extends Component {
  
  

  render() {
    const { name, type, notes } = this.props.component

    return (
      <div className="component">
        <h4>{name}</h4>
        <p>Type: {type}</p>
        <p>Notes: {notes}</p>
      </div>
    )
  }
}
