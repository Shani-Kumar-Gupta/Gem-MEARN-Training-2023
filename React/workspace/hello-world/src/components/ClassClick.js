import React, { Component } from 'react'

export default class ClassClick extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  clickHandler() {
    console.log("Class Clicked!");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}></button>
      </div>
    )
  }
}
