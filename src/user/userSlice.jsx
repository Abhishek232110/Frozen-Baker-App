// authenticationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../api/apiConfig";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "getAllProducts",
  async (arg, { getState }) => {
    const state = getState();
    const { size, pageNo, flavour } = state.users;
    let url = `${getAllProducts}?size=${size}&pageNo=${pageNo}&flavour=${flavour}`;
    if (flavour) {
      url = `${url}&flavour=${flavour}`;
    }
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }
);

export const getFakeData = createAsyncThunk("getFakeData", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);
  }
});
export const userSlice = createSlice({
  name: "authentication",
  initialState: {
    products: [],
    size: 10,
    pageNo: 0,
    flavour: "Butterscotch",
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFakeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFakeData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getFakeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
