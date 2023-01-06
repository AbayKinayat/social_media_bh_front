import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import sexSlice from "./slices/SexSlice";

const reducers = combineReducers({
  auth: authSlice.reducer,
  sexs: sexSlice.reducer

})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
