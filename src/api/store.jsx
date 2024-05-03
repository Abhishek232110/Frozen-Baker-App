// const persistConfig = {
//   key: "root",
//   storage,

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../user/userSlice";
import productSlice from "../products/productSlice";

// };
const reducer = combineReducers({
  users: auth,
  product: productSlice,
});
// const persistReducers = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: reducer,
});

// export const persistor = persistStore(store);
