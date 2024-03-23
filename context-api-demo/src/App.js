import { useState } from "react";
import "./App.css";
import Cart from "./Components/cart";
import Total from "./Components/total";
function App() {
  const products = [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ];
  const [cartdata, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  let handleProdChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart = [...cartdata];
    let obj = { pName, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setProducts(tCart);
    setTotal(tPrice);
  };

  return (
    <div className="App">
      <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr />
        <select onChange={handleProdChange}>
          {products.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.pName} - ${product.price}
              </option>
            );
          })}
        </select>
      </div>
      <Cart cartdata={cartdata}></Cart>
      <Total total={total}></Total>
    </div>
  );
}

export default App;
