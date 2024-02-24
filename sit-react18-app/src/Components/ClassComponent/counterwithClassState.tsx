import React, { Component } from "react";

class CounterClass extends Component {
  state: { counter: number } = {
    counter: 0,
  };

  increment = () => {
    // way1
    this.setState((prevState: { counter: number }, props) => {
      return { counter: prevState.counter + 1 };
    });
    // way2
    // let c = this.state.counter;
    // c++;
    // this.setState((prevState: { counter: number }, props) => {
    //   return { counter: c };
    // });
    // way3
    // this.setState({ counter: this.state.counter + 1 });
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
