import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TbLoader } from "react-icons/tb";

const initialState = {
  items: [],
  status: null,
};

export const productsFatching = createAsyncThunk(
  "products/productsFatching",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFatching.pending, (state, action) => {
      state.status = <TbLoader className='animate-spin inline-block' />;
    });
    builder.addCase(productsFatching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });
    builder.addCase(productsFatching.rejected, (state, action) => {
      state.status = "Something went wrong, please try again later!";
    });
  },
});

export default productsSlice.reducer;
