import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  return await axios
    .get("http://localhost:5000/api/items")
    .then((response) => response.data);
});

export const addItem = createAsyncThunk("items/addItem", async (item) => {
  return await axios
    .post("http://localhost:5000/api/items", item)
    .then((response) => response.data);
});

export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
  await axios.delete(`http://localhost:5000/api/items/${id}`);
  return id;
});

const itemSlice = createSlice({
  name: "items",
  initialState,
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
    builder.addCase(addItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.loading = false;
      const item = action.payload;
      state.items.push(item);
    });

    //DELETE ITEM
    builder.addCase(deleteItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.loading = false;
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
    });
  },
});

export default itemSlice.reducer;
