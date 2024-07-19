import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: null,
  isLoading: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //LOADING USER
    userLoading: (state) => {
      state.isLoading = true;
    },

    userLoaded: (state, action) => {
      (state.user = action.payload),
        (state.isAuthenticated = true),
        (state.isLoading = false);
    },

    //USER REGISTRATION
    userRegistred: (state, action) => {
      action.payload, (state.isAuthenticated = true), (state.isLoading = false);
    },

    userNotRegistred: (state) => {
      (state.token = null),
        (state.user = null),
        (state.isAuthenticated = false),
        (state.isLoading = false);
    },
  },
});

export default userSlice.reducer;
