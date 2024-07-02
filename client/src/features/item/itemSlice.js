import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    addItem: (state, action) => {
      const item = action.payload;
      state.items.unshift({ id: item.id, name: item.name });
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    itemsLoading: (state) => {
      state.loading = true;
    },
  },
});

export const fetchItems = () => async (dispatch) => {
  dispatch(itemsLoading());
  try {
    const response = await axios.get("/api/items");
    dispatch(getItems(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const { getItems, addItem, deleteItem, itemsLoading } =
  itemSlice.actions;
export default itemSlice.reducer;
