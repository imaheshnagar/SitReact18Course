import React from "react";

type CounterState = {
  count: number;
};
type CounterProps = {
  name: string;
};

class CounterWithProps extends React.Component<CounterProps, CounterState> {
  constructor(props: any) {
    super(props);
    console.log("props", props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState: { count: number }, props: CounterProps) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default CounterWithProps;
