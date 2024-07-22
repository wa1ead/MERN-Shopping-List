import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const getErrors = createAction(
  "error/getErrors",
  (msg, status, id = null) => {
    return {
      payload: { msg, status, id },
    };
  }
);

export const clearErrors = createAction("error/clearErrors");

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ERROR
    builder.addCase(getErrors, (state, action) => {
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    });
    // CLEAR ERROR
    builder.addCase(clearErrors, (state) => {
      state.msg = {};
      state.status = null;
      state.id = null;
    });
  },
});

export default errorSlice.reducer;
