import React from "react";
import { useHistory, Link } from "react-router-dom";

const ProductBox = ({ product }) => {
  // const history = useHistory();

  const handleClick = () => {
    // history.push(`/product/${product.id}`);
  };

  return (
    <div>
      <h2>
        <Link
          to={"/ProductList/" + product.id}
          style={{ textDecoration: "none" }}
        >
          {product.name}
        </Link>
      </h2>
      {/* <button onClick={handleClick}>View Details</button> */}
    </div>
  );
};

export default ProductBox;
