import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleClick()}>Change Text</button>
        <button onClick={() => this.props.handleClick('Greet')}>Click</button>
      </div>
    )
  }
}

export default ChildComponent