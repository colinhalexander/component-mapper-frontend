import React, { Component } from 'react'

import '../stylesheets/ComponentLevel.css'

import Komponent from './Komponent'

export default class ComponentLevel extends Component {
  
  makeComponents = () => {
    return this.props.components.map((component, index) => {
      return <Komponent key={index} component={component} />
    })
  }

  getChildComponents = () => {
    return this.props.components
      .filter(component => component.children) // assumes cp.children is null (falsy), aka not an empty array, may need to change based on data structuring in backend
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
    return (
      <>
        <div className="component-level">
          {this.makeComponents()}
        </div>
        {
          this.getChildComponents()[0] 
          ? <ComponentLevel components={this.getChildComponents()} /> 
          : ""
        }
      </>
    )
  }
}
