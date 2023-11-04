import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       message: 'Parent Component!'
    }
    this.onHandleClick = this.onHandleClick.bind(this);
  }
  onHandleClick(className) {
    this.setState({
      message: 'Parent changed from Child Component!'
    });
    if (className) {
      alert(`Hello ${className}`);
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildComponent handleClick={this.onHandleClick} />
      </div>
    )
  }
}

export default ParentComponent