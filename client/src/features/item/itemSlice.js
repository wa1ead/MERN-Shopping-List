import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
};

export const fetchItems = createAsyncThunk("items/fetchItems", () => {
  return axios
    .get("http://localhost:5000/api/items")
    .then((response) => response.data);
});

export const addItem = createAsyncThunk("items/addItem", (item) => {
  return axios
    .post("http://localhost:5000/api/items", item)
    .then((response) => response.data);
});

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: (builder) => {
    //FETCH ITEMS
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });

    //ADD ITEM
    builder.addCase(addItem.fulfilled, (state, action) => {
      const item = action.payload;
      state.items.push(item);
    });
  },
});

export const { deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
