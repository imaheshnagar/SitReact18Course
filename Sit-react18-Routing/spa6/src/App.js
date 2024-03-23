import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/ProductList" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </li>
      </ul>
      <hr></hr>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ProductList" element={<ProductList />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
