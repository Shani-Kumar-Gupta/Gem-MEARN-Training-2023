import React from 'react';

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  // incrementCounter = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }

  incrementCounter() {
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // update state based on previous state
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    });
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className='counter__container'>
        <h1>COUNTER: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment Counter</button>
        <button onClick={this.decrementCounter}>Decrement Counter</button>
      </div>
    )
  }
}

export default CounterClass;