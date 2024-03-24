import React, { useContext } from "react";
import TotalContext from "../store/total-context";
const Total = () => {
  const totalval = useContext(TotalContext);
  return (
    <div className="customDiv">
      <h3>Total Component</h3>
      <hr />
      <h2>Total : {totalval}</h2>
    </div>
  );
};
export default Total;
