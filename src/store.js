import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.jsx";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
