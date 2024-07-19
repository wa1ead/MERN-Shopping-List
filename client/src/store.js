import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import itemReducer from "./features/item/itemSlice";
import userReducer from "./features/error/errorSlice";
import errorReducer from "./features/error/errorSlice";

const store = configureStore({
  reducer: { items: itemReducer, user: userReducer, error: errorReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
