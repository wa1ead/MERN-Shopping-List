import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

//GET ERRORS
const getErrors = createAsyncThunk(
  "error/getErrors",
  (msg, status, id = null) => {
    return { msg, status, id };
  }
);

//CLEAR ERRORS
const clearErrors = createAsyncThunk("error/clearErrors", () => {
  return;
});

const errorSlice = createSlice({
  name: "error",
  initialState,
  extraReducers: (builder) => {
    //GET ERROR
    builder.addCase(getErrors.fulfilled, (state, action) => {
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    }),
      //CLEAR ERROR
      builder.addCase(clearErrors.fulfilled, (state) => {
        state.msg = {};
        state.status = null;
        state.id = null;
      });
  },
});

export default errorSlice.reducer;
