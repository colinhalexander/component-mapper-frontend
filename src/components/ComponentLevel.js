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
  
  makeComponents = () => {
    return this.props.components.map((component, index) => {
      return (
        <Komponent 
          key={index}
          component={component}
          selectComponent={this.selectComponent}
          isActive={component === this.state.clickedComponent}
        />
      )
    })
  }

  getChildComponents = () => {
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
  
  render() {
    const { level } = this.props

    return (
      <div className="level-wrapper">
        <p id="level-tag">{level === 0 ? "Top" : `Level ${level}`}</p>
        <div className="component-level">
          {this.makeComponents()}
        </div>
        {
          this.getChildComponents()[0] 
          ? <ComponentLevel
              components={this.getChildComponents()}
              level={this.props.level + 1}
            /> 
          : ""
        }
      </div>
    )
  }
}
