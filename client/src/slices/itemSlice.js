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
      const name = action.payload;
      const id = uuid();
      state = [...state.list, { id: id, name: name }];
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.list = state.list.filter((item) => item.id !== itemId);
    },
  },
});

export const { getItems, addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
