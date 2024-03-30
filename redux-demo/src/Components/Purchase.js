import React from "react";
import { useSelector } from "react-redux";

const Purchase = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <h2>Purchase Component</h2>
      <hr></hr>
      <h3>Available Products</h3>
      <ul>
        <select>
          {products.map((product) => (
            <option key={product.id}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </ul>
    </div>
  );
};

export default Purchase;
