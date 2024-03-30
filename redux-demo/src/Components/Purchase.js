import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add_To_Cart } from "../store/ProductSlice";

const Purchase = () => {
  const products = useSelector((state) => state.pr.products);
  const dispatch = useDispatch();
  const PurchaseEventHandler = (e) => {
    const id = e.target.options[e.target.selectedIndex].id;
    const name = e.target.options[e.target.selectedIndex].text;
    const price = e.target.value;
    // dispatch({ type: "Add_To_Cart", payload: { id, name, price } });
    dispatch(Add_To_Cart({ id, name, price }));
  };

  return (
    <div>
      <h2>Purchase Component</h2>
      <hr></hr>
      <h3>Available Products</h3>
      <ul>
        <select onChange={(e) => PurchaseEventHandler(e)}>
          {products.map((product) => (
            <option key={product.id} id={product.id} value={product.price}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </ul>
    </div>
  );
};

export default Purchase;
