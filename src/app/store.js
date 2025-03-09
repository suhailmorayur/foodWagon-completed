// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from '../features/cart/cartSlice'

// export default configureStore({
//   reducer: {
//     cart : cartReducer
//   },
// })

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // ✅ Uses localStorage
import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartSlice"; 

const persistConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
