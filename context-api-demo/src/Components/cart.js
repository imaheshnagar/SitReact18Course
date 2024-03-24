import React from "react";
import TotalContext from "../store/total-context";
const Cart = (props) => {
  console.log("Cart Component", props);
  return (
    <TotalContext.Consumer>
      {(total) => {
        return (
          <div className="customDiv">
            <h3>Cart Component</h3>
            <hr />
            <ul>
              {props.cartdata.map((product, index) => {
                return <li key={index}>{product.pName} </li>;
              })}
            </ul>
            <h1>total Qty:{total}</h1>
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
};

export default Cart;
