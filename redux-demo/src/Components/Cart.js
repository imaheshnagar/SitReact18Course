import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const onDelete = (index) => {};

  return (
    <div>
      <h2>Cart Component</h2>
      <hr></hr>
      {cartProducts.map((product, index) => (
        <div key={index}>
          <p>{product.name}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
