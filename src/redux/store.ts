import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./state/count";

export const store = configureStore({
  reducer: {
    countState: countReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
