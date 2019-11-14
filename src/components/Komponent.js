import React, { Component } from 'react'

import ComponentMenu from './ComponentMenu'

export default class Komponent extends Component {
  
  state = {
    showMore: false,
    showMenu: false
  }

  toggleDetails = () => {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  toggleMenu = () => {
    this.setState({
      showMenu: this.props.isActive && !this.state.showMenu
    })
  }

  selectComponentAndShowDetails = () => {
    const { isActive, selectComponent, component } = this.props

    !isActive 
      ? selectComponent(component)
      : this.toggleDetails()
  }

  writeClassList = () => {
    const { isActive, activeParentID, component } = this.props

    return "component" + 
           `${isActive ? " active" : ""}` +
           `${activeParentID === component.parentID ? " active-parent" : ""}`
  }

  render() {
    const { name, type, notes } = this.props.component
    const { showMenu, showMore } = this.state

    return (
      <div 
        className={this.writeClassList()}
        onClick={this.selectComponentAndShowDetails}
      >
        <div>
          <img
            src="http://ai-i3.infcdn.net/icons_siandroid/png/300/2416/2416616.png"
            alt="menu icon" id="component-menu-icon"
            onClick={this.toggleMenu}
          />
          {showMenu ? <ComponentMenu /> : ""}
        </div>
        <h4>{name}</h4>
        {showMore 
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
