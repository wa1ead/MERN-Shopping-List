import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
};

export const fetchItems = createAsyncThunk("items/fetchItems", () => {
  return axios.get("/api/items").then((response) => response.data);
});

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items = [{ id: item.id, name: item.name }, { ...state.items }];
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
  },
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
