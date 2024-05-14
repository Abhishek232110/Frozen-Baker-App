// authenticationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts, uploadAddress } from "../api/apiConfig";
import axios from "axios";

export const allInOneApi = createAsyncThunk(
  "getAllProducts",
  async (arg, { getState }) => {
    const state = getState();
    const { size, pageNo, flavour } = state.users;
    let url = `${getAllProducts}?size=${size}&pageNo=${pageNo}&flavour=${flavour}`;
    if (flavour) {
      url = `${url}&flavour=${flavour}`;
    }
    const response = await axios.get(url);
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

export const SaveAddress = createAsyncThunk(
  "userAddress",
  async ({ formData, date }) => {
    console.log("form", formData, date);
    try {
      const result = await fetch(uploadAddress, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date,
        }),
      });
      const res = await result.json();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
);
export const userSlice = createSlice({
  name: "authentication",
  initialState: {
    products: [],
    size: 20,
    pageNo: 0,
    flavour: "",
    cart: [],
    paymentId: [],
    orderedId: [],
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    orderedId: (state, action) => {
      state.orderedId.push(action.payload);
    },
    paymentId: (state, action) => {
      state.paymentId.push(action.payload);
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
      .addCase(allInOneApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allInOneApi.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(allInOneApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { addCart, orderedId, paymentId } = userSlice.actions;

export default userSlice.reducer;
