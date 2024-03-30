import React, { useState } from "react";

const CounterwithObjLitral = () => {
  const [state, setState] = useState({ cnt: 0, flag: false });

  const incrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      cnt: prevState.cnt + 1,
    }));
  };

  const decrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      cnt: prevState.cnt - 1,
    }));
  };

  const toggleFlag = () => {
    setState((prevState) => ({
      ...prevState,
      flag: !prevState.flag,
    }));
  };

  return (
    <div>
      <p>Count: {state.cnt}</p>
      <p>Flag: {state.flag ? "true" : "false"}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>decrement Count</button>
      <button onClick={toggleFlag}>Toggle Flag</button>
    </div>
  );
};

export default CounterwithObjLitral;
