import React from "react";
const Cart = (props) => {
  console.log("Cart Component", props);
  return (
    <div className="customDiv">
      <h3>Cart Component</h3>
      <hr />
      <ul>
        {props.cartdata.map((product, index) => {
          return <li key={index}>{product.pName} </li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
