import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import {
  createDelivaryDetails,
  getButterScotchCake,
  getChocolateApi,
  getChocolateCake,
  getFlowerCake,
  getFruitCake,
  getIcecreamApi,
  getPastryApi,
  getPineappleCake,
  getProductApi,
  getRedvelvetCake,
  getTruffleCake,
  getVanillaCake,
} from "../api/apiConfig";
import axios from "axios";

// Product Details
export const getProductDetails = createAsyncThunk("getProduct", async () => {
  const response = await axios.get(getProductApi);
  // console.log(response.data);
  return response.data;
});
// Chocolate Data
export const getChocolateData = createAsyncThunk(
  "getChocolateCake",
  async () => {
    const response = await axios.get(getChocolateCake);
    return response.data;
  }
);
// Butterscotch Data
export const getButterScotchData = createAsyncThunk(
  "getChocolateData",
  async () => {
    const response = await axios.get(getButterScotchCake);
    return response.data;
  }
);
// Flower Data
export const getFlowercakeData = createAsyncThunk("getFlowerData", async () => {
  const response = await axios.get(getFlowerCake);
  return response.data;
});
// Truffle Data
export const getTruffleData = createAsyncThunk("getTruffleData", async () => {
  const response = await axios.get(getTruffleCake);
  return response.data;
});
// Redvelvet Data
export const getRedvelvetData = createAsyncThunk(
  "getRedvelvetData",
  async () => {
    const response = await axios.get(getRedvelvetCake);
    return response.data;
  }
);
// Vanilla Data
export const getVanillaData = createAsyncThunk("getVanillaData", async () => {
  const response = await axios.get(getVanillaCake);
  return response.data;
});
// FruitCake Data
export const getFruitData = createAsyncThunk("getFruitData", async () => {
  const response = await axios.get(getFruitCake);
  return response.data;
});

// pastry
export const getPastryDetails = createAsyncThunk("getPastry", async () => {
  const response = await axios.get(getPastryApi);
  return response.data;
});
// icecream
export const getIcecreamDetails = createAsyncThunk("getIcecream", async () => {
  const response = await axios.get(getIcecreamApi);
  // console.log(response.data);
  return response.data;
});
// PineApple Data
export const getPineappleData = createAsyncThunk(
  "getPineappleData",
  async () => {
    const response = await axios.get(getPineappleCake);
    return response.data;
  }
);
// chocolate
export const getChocolateDetail = createAsyncThunk(
  "getChocolateDetail",
  async () => {
    const response = await axios.get(getChocolateApi);
    return response.data;
  }
);
// upload Api
export const uploadDeivaryDetails = createAsyncThunk(
  "uploadDelivaryDetails",
  async (datas, { rejectWithValue }) => {
    const response = await fetch(createDelivaryDetails, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    });
    try {
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ProductSlice = createSlice({
  name: "getProduct",
  initialState: {
    users: null,
    cartItems: null,
    chocolatefl: null,
    butterscotchfl: null,
    flowerfl: null,
    trufflefl: null,
    velvetfl: null,
    vanilafl: null,
    fruitcakefl: null,
    pineapplefl: null,
    pastry: null,
    chocolate: null,
    icecream: null,
    loading: false,
    error: null,
  },
  reducers: {
    addtoCart: (state, action) => {
      state.users = state.users.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    removetoCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIcecreamDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIcecreamDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.icecream = action.payload;
      })
      .addCase(getIcecreamDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getChocolateData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChocolateData.fulfilled, (state, action) => {
        state.loading = false;
        state.chocolate = action.payload;
      })
      .addCase(getChocolateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getButterScotchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getButterScotchData.fulfilled, (state, action) => {
        state.loading = false;
        state.butterscotchfl = action.payload;
      })
      .addCase(getButterScotchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getFlowercakeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFlowercakeData.fulfilled, (state, action) => {
        state.loading = false;
        state.flowerfl = action.payload;
      })
      .addCase(getFlowercakeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getTruffleData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTruffleData.fulfilled, (state, action) => {
        state.loading = false;
        state.trufflefl = action.payload;
      })
      .addCase(getTruffleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getRedvelvetData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRedvelvetData.fulfilled, (state, action) => {
        state.loading = false;
        state.velvetfl = action.payload;
      })
      .addCase(getRedvelvetData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getVanillaData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVanillaData.fulfilled, (state, action) => {
        state.loading = false;
        state.vanilafl = action.payload;
      })
      .addCase(getVanillaData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getFruitData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFruitData.fulfilled, (state, action) => {
        state.loading = false;
        state.fruitcakefl = action.payload;
      })
      .addCase(getFruitData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getPineappleData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPineappleData.fulfilled, (state, action) => {
        state.loading = false;
        state.pineapplefl = action.payload;
      })
      .addCase(getPineappleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getPastryDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPastryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.pastry = action.payload;
      })
      .addCase(getPastryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getChocolateDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChocolateDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.chocolate = action.payload;
      })
      .addCase(getChocolateDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { addtoCart, removetoCart } = ProductSlice.actions;
export default ProductSlice.reducer;
