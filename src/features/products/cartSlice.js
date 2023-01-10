import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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

        // Toastify notification
        toast.info("Quantity increased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);

        // Toastify notification
        toast.success("Product added into cart!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      //  Add item to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //Product remove if click remove button
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;

      // Toastify notification
      toast.error("Product removed from cart!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      //Update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //Clicking the Clear Cart button will remove all products
    clearCart(state, action) {
      state.cartItems = [];

      // Toastify notification
      toast.error("Cart cleared!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      //Update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //Decrease item quantity
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        // Toastify notification
        toast.info("Quantity decreased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = updatedCartItems;

        // Toastify notification
        toast.error("Product removed from cart!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      // Update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //Subtotal all products with quantity
    getSubtotal(state, action) {
      const subtotal = state.cartItems.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const itemTotal = price * cartQuantity;

        acc += itemTotal;

        return acc;
      }, 0);

      state.cartTotalAmount = subtotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubtotal,
} = cartSlice.actions;
export default cartSlice.reducer;
