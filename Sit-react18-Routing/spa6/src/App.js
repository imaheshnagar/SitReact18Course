import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/ProductList" style={{ textDecoration: "none" }}>
            Products
          </NavLink>
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
