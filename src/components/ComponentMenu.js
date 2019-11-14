import React from 'react'

import '../stylesheets/ComponentMenu.css'

export default function ComponentMenu(props) {
  return (
    <div className="component-menu-wrapper" onClick={props.toggleMenu}>
      <div className="component-menu">
        <div className="component-menu-option">
          <p>Add Child Component</p>
        </div>
        <div className="component-menu-option">
          <p>Edit Component</p>
        </div>
      </div>
    </div>
  )
}
