import React, { Component } from 'react'

export default class Komponent extends Component {
  
  state = {
    showMore: false
  }

  toggleDetails = () => {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  render() {
    const { name, type, notes } = this.props.component

    return (
      <div className="component" onClick={this.toggleDetails}>
        <h4>{name}</h4>
        {this.state.showMore 
          ? <>
              <p>Type: {type}</p>
              <p>Notes: {notes}</p>
            </>
          : ""
        }
      </div>
    )
  }
}
