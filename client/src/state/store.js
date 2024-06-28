import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../slices/itemSlice";

const store = configureStore({ reducer: { items: itemReducer } });

export default store;
