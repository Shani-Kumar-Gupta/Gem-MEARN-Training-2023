import React, { Component } from 'react'

class MountingChild extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    console.log("Child constructor called!"); //4
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps called!"); //5
  }

  componentDidMount() {
    console.log("CHild componentDidMount called!"); //7
  }

  render() {
    console.log("Child render called!"); //6
    return (
      <div>MountingChild</div>
    )
  }
}

export default MountingChild