import { createStore } from "redux";
const initialData = {
  // initial data
  products: [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Mango", price: 30 },
    { id: 4, name: "Grapes", price: 34 },
  ],
  cart: [{ id: 1, name: "Apple", price: 10 }],
  total: 10,
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return state;
    case "Remove_From_Cart":
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
