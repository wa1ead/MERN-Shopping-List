import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import itemReducer from "./features/item/itemSlice";

const store = configureStore({
  reducer: { items: itemReducer },
  middleware: [thunk],
});

export default store;
