import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useOutletContext();
  console.log(data);
  // Use the id to fetch the product details from your data source

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Render the product details */}
    </div>
  );
};

export default ProductDetails;
