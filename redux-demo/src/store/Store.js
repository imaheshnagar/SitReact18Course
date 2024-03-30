import { createStore } from "redux";
const initialData = {
  // initial data
  products: [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Mango", price: 30 },
    { id: 4, name: "Grapes", price: 34 },
  ],
  cart: [],
  total: 0,
};

const reducer = (state = initialData, action) => {
  console.log("Reducer Called", action);
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + parseInt(action.payload.price),
      };
    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        total: state.total - parseInt(action.payload.price),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
