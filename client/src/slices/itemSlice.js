import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" },
  ],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItems: (state) => {
      return state;
    },
  },
});

export const { getItems } = itemSlice.actions;
export default itemSlice.reducer;
