// const persistConfig = {
//   key: "root",
//   storage,

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";
import productSlice from "../products/productSlice";

// };
const reducer = combineReducers({
  users: userReducer,
  product: productSlice,
});
// const persistReducers = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: reducer,
});

// export const persistor = persistStore(store);
