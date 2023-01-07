import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //If the item is already in the cart
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If exist
      if (existedItemIndex >= 0) {
        // Increase item quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }

      //  Add item to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;

      //Update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];

      //Update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = updatedCartItems;
      }

      // Update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
