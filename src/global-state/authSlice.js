import { createSlice } from "@reduxjs/toolkit";

let AuthSlice = createSlice({
  name: "auth",
  initialState: { isLoggiedind: true },
  reducers: {
    togglelogin: (state) => {
      state.isLoggiedind = !state.isLoggiedind;
    },
  },
});
export const { togglelogin } = AuthSlice.actions;
export default AuthSlice.reducer;
