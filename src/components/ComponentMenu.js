import React from 'react'

import '../stylesheets/ComponentMenu.css'

export default function ComponentMenu() {
  return (
    <div className="component-menu-wrapper">
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
