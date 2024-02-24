import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const styles = {
    section: {
      fontSize: "18px",
      color: "#292b2c",
      backgroundColor: "#fff",
      padding: "0 20px",
    },
    wrapper: {
      margin: "0 auto",
      marginTop: "50px",
    },
  };

  // const increment = () => {
  //     setCount(count + 1);
  // };

  // const decrement = () => {
  //     setCount(count - 1);
  // };

  return (
    <>
      <section style={styles.section}>
        <div style={styles.wrapper}>
          <h1>Counter: {count}</h1>
          {/* <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button> */}
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </section>
    </>
  );
};

export default Counter;
