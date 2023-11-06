import React, { Component } from 'react'
import MountingChild from './MountingChild';

class MountingParent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('Parent constructor called!'); //1
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent getDerivedStateFromProps called!"); //2
  }

  componentDidMount() {
    console.log("Parent componentDidMount called!"); //8
  }

  render() {
    console.log("Parent render called!"); // 3
    return (
      <div>
        <MountingChild />
      </div>
    )
  }
}

export default MountingParent