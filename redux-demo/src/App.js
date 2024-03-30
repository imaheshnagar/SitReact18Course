import logo from "./logo.svg";
import "./App.css";
import Purchase from "./Components/Purchase";
import Total from "./Components/Total";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
