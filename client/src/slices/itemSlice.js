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
  name: "item",
  initialState,
  reducers: {
    getItems: (state) => {
      return state.list;
    },
  },
});

export default itemSlice.reducer;
