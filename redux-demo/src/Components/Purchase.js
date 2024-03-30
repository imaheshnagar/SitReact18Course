import React from "react";

const Purchase = () => {
  const products = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Mango", price: 30 },
    { id: 4, name: "Grapes", price: 34 },
  ];

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
