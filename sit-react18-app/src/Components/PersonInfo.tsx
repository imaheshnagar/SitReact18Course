import React from "react";

function PersonInfo(props: { name: string; age: number }): JSX.Element {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default PersonInfo;
