import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Redux DevTools'u devre dışı bırakmak için production ortamında kontrol ekliyoruz
});
