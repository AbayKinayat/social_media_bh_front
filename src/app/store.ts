import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";

const reducers = combineReducers({
  auth: authSlice.reducer
})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
