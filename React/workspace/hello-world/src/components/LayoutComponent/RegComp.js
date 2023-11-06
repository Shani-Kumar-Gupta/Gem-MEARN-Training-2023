import React, { Component } from 'react';

class RegComp extends Component {
  render() {
    console.log('Regular Component rendered');
    return <div>RegComp : {this.props.name}</div>;
  }
}

export default RegComp;
