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

  selectComponentAndShowDetails = () => {
    const { isActive, selectComponent } = this.props

    !isActive 
      ? selectComponent(this.props.component)
      : this.toggleDetails()
  }

  render() {
    const { isActive } = this.props
    const { name, type, notes } = this.props.component

    return (
      <div 
        className={`component ${isActive ? "active" : ""}`}
        onClick={this.selectComponentAndShowDetails}
      >
        <h4>{name}</h4>
        {this.state.showMore 
          ? <>
              <p>Type: {type}</p>
              {notes ? <p>Notes: {notes}</p> : ""}
            </>
          : ""
        }
      </div>
    )
  }
}
