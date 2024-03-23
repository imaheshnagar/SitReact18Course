import React from "react";
const Total = (props) => {
  return (
    <div className="customDiv">
      <h3>Total Component</h3>
      <hr />
      <h2>Total : {props.total}</h2>
    </div>
  );
};
export default Total;
