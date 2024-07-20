import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: null,
  isLoading: null,
};

export const loadUser = createAsyncThunk("user/loadUser", async (getState) => {
  //GET TOKEN
  const token = getState().auth.token;

  //HEADERS
  const config = {
    headers: {
      "Content-Type": "application",
    },
  };

  //ADD TOKEN TO HEADERS
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  await axios
    .get("/api/auth/user", config)
    .then((response) => response.data)
    .catch((err) => {
      err.response.data;
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //CHECK LOGIN & AUTH USER
    builder.addCase(loadUser.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(loadUser.fulfilled, (state, action) => {
        (state.user = action.payload),
          (state.isAuthenticated = true),
          (state.isLoading = false);
      }),
      builder.addCase(loadUser.rejected, (state) => {
        localStorage.removeItem("token"),
          (state.token = null),
          (state.user = null),
          (state.isAuthenticated = false),
          (state.isLoading = false);
      });
  },
});

export default userSlice.reducer;
