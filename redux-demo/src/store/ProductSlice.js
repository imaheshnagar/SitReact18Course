import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Mango", price: 30 },
    { id: 4, name: "Grapes", price: 34 },
  ],
  cart: [],
  total: 0,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    Add_To_Cart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.price);
    },
    Remove_From_Cart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.total = state.total - parseInt(action.payload.price);
    },
  },
});

export const { Add_To_Cart, Remove_From_Cart } = ProductSlice.actions;
export default ProductSlice.reducer;
