import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onDelete = (index) => {
    console.log("Delete Called", index);
    dispatch({
      type: "Remove_From_Cart",
      payload: cartProducts.filter((product) => product.id === index)[0],
    });
  };

  return (
    <div>
      <h2>Cart Component</h2>
      <hr></hr>
      {cartProducts.map((product, index) => (
        <span key={index}>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </span>
      ))}
    </div>
  );
};

export default Cart;
