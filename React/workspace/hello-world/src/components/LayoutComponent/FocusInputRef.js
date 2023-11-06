import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusInputRef extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.componentRef = React.createRef();
  }
  clickFocusInput = () => {
    this.componentRef.current.focusInput();
  }
  render() {
    return (
      <div>
        <InputRef ref={this.componentRef} />
        <button onClick={this.clickFocusInput}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInputRef