import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state = {
       message: 'Hello!'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: 'Good Bye!'
    })
  }

  // Approach 5
  onClickHandler = () => {
    this.setState({
      message: 'Good Bye!'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Approach 1 */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* Approach 2 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach 3 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Approach 4 */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind