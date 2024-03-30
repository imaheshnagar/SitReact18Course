import { React, useState } from "react";
import ProductBox from "./ProductBox";
import { Outlet } from "react-router-dom";

const ProductList = ({ products }) => {
  const [productsdata, setProductsdata] = useState([
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 200 },
    { id: 3, name: "Grapes", price: 300 },
  ]);

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {productsdata.map((product) => (
          <li
            key={product.id}
            style={{ display: "inline-block", textAlign: "left" }}
          >
            <ProductBox key={product.id} product={product} />
          </li>
        ))}
      </ul>
      <div>
        <Outlet context={productsdata} />
      </div>
    </>
  );
};

export default ProductList;
