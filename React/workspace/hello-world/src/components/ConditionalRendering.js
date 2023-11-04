import React, { Component } from 'react';

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // Conditional Rendering Approach 1
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shani!</div>
    // } else {
    //   return <div>Welcome Guest!</div>
    // };

    // Conditional Rendering Approach 2
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Shani!</div>
    // } else {
    //   message = <div>Welcome Guest!</div>
    // }
    // return <div>{message}</div>

    // Conditional Rendering Approach 3
    return this.state.isLoggedIn ? (
      <div>Welcome Shani!</div>
    ) : (
      <div>Welcome Guest!</div>
    );

    // Conditional Rendering Approach 4
    // return this.state.isLoggedIn && <div>ConditionalRendering</div>;
  }
}

export default ConditionalRendering;
