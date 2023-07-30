import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "", email: "" },
    uid: "",
    stateChange: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.uid = payload.uid;
        state.stateChange = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.uid = payload.uid;
        state.stateChange = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.uid = "";
        state.stateChange = false;
      });
  },
});

export const authReducer = authSlice.reducer;