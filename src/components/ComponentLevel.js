import React, { Component } from 'react'

import '../stylesheets/ComponentLevel.css'

import Komponent from './Komponent'

export default class ComponentLevel extends Component {

  state = {
    clickedComponent: null
  }

  selectComponent = (component) => {
    this.setState({ clickedComponent: component })
  }

  deselectComponent = (event) => {
    if (event.target.classList.contains("component-level")) {
      this.setState({ clickedComponent: null })
    }
  }
  
  makeComponents = () => {
    const { clickedComponent } = this.state
    const { toggleForm, components } = this.props

    return components.map((component, index) => {
      return (
        <Komponent 
          key={index}
          component={component}
          selectComponent={this.selectComponent}
          isActive={component === clickedComponent}
          activeParentID={this.props.activeParentID}
          toggleForm={toggleForm}
        />
      )
    })
  }

  getAllChildComponents = () => {
    return this.props.components
      .filter(component => component.children)
      .map(parent => parent.children.map(child => {
          return {
            ...child,
            parentID: parent.id
          }
        })
      )
      .flat()
  }

  getChildrenOfClickedComponent = () => {
    const { clickedComponent } = this.state

    if (clickedComponent && clickedComponent.children) {
      return clickedComponent.children.map(child => {
        return {
          ...child,
          parentID: clickedComponent.id
        }
      })
    } else return []
  }
  
  render() {
    const { clickedComponent } = this.state
    const { level, showAll, toggleForm } = this.props

    return (
      <>
        <div className="level-wrapper" onClick={this.deselectComponent}>
          <p id="level-tag">{level === 0 ? "Top" : `Level ${level}`}</p>
          <div className="component-level">
            {this.makeComponents()}
          </div>
        </div>
        {
          this.getAllChildComponents()[0] 
          ? <ComponentLevel
              components={
                showAll
                ? this.getAllChildComponents()
                : this.getChildrenOfClickedComponent()
              }
              level={level + 1}
              showAll={showAll}
              activeParentID={clickedComponent ? clickedComponent.id : null}
              toggleForm={toggleForm}
            /> 
          : ""
        }
      </>
    )
  }
}
