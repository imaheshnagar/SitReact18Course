import React, { Component } from "react";

class CounterClass extends Component {
  state: { counter: number } = {
    counter: 0,
  };

  increment = () => {
    let c = this.state.counter;
    c++;

    this.setState((prevState, props) => {
      return { counter: c };
    });
  };

  decrement = () => {
    let c = this.state.counter;
    c--;
    this.setState({ counter: c });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
