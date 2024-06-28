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
    addItem: (state, action) => {
      return {};
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.list = state.list.filter((item) => item.id !== itemId);
    },
  },
});

export const { getItems, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
