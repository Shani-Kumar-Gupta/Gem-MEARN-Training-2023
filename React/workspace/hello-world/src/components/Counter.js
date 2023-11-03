import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment() {
    // this.state.count += 1; // Don't use this becuase it's not re-render the UI.
    // use setState instead - Async
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('increment:', this.state.count);
    });
    console.log(this.state.count);
  }
  descrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  // Case 3:
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  incrementV2() {
    this.setState((prevState, propsVal) => ({
      count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.descrement()}>Decrement</button>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    )
  }
}

export default Counter;