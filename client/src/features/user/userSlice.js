import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: null,
  isLoading: null,
};

export const tokenConfig = (getState) => {
  //GET TOKEN
  const token = getState().user.token;

  //HEADERS
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //ADD TOKEN TO HEADERS
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const config = tokenConfig(getState);
      const response = await axios.get("/api/auth/user", config);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ name, email, password });

    try {
      const response = await axios.post("/api/auth/register", body, config);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //CHECK LOGIN & AUTH USER
    builder.addCase(loadUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    });

    builder.addCase(loadUser.rejected, (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    });

    //REGISTER USER
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload.user;
    });
    builder.addCase(userRegister.rejected, (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
    });
  },
});

export default userSlice.reducer;
