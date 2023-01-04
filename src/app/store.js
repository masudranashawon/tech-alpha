import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFatching,
} from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productsFatching());
