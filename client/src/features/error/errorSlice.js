import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    //GET ERROR
    getErrors: (state, action) => {
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },

    //CLEAR ERROR
    clearErrors: (state) => {
      state.msg = {};
      state.status = null;
      state.id = null;
    },
  },
});

export default errorSlice.reducer;
