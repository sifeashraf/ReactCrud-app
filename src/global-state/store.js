import { configureStore } from "@reduxjs/toolkit";
import postsreducer from "./postSlice";
import toggleauth from "./authSlice";
let store = configureStore({
  reducer: { postsreducer, toggleauth },
});

export default store;
