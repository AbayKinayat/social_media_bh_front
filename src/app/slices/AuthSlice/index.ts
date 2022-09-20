import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../../models";
import { authorization, logout, refresh, registration } from "./actionCreators";

interface AuthState {
  user: IUser | null,
  authLoading: boolean;
  refreshLoading: boolean;
  authSuccess: boolean;
  refreshSuccess: boolean;
}

const initialState: AuthState = {
  user: null,
  authLoading: false,
  refreshLoading: true,
  authSuccess: false,
  refreshSuccess: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registration.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.authLoading = false;
        state.authSuccess = true;
      }
    )
    builder.addCase(
      registration.pending,
      (state) => {
        state.authLoading = true;
      }
    )
    builder.addCase(
      registration.rejected,
      (state) => {
        state.authLoading = false;
        state.authSuccess = false;
      }
    )
    builder.addCase(
      authorization.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.authLoading = false;
        state.authSuccess = true;
      }
    )
    builder.addCase(
      authorization.pending,
      (state) => {
        state.authLoading = true;
      }
    )
    builder.addCase(
      authorization.rejected,
      (state) => {
        state.authLoading = false;
        state.authSuccess = false;
      }
    )
    builder.addCase(
      logout.fulfilled,
      (state, action: PayloadAction<null>) => {
        state.user = action.payload;
        state.authLoading = false;
        state.authSuccess = true;
      }
    )
    builder.addCase(
      logout.pending,
      (state) => {
        state.authLoading = true;
      }
    )
    builder.addCase(
      logout.rejected,
      (state) => {
        state.authLoading = false;
        state.authSuccess = false;
      }
    )
    builder.addCase(
      refresh.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.refreshLoading = false;
        state.refreshSuccess = true;
      }
    )
    builder.addCase(
      refresh.pending,
      (state) => {
        state.refreshLoading = true;
      }
    )
    builder.addCase(
      refresh.rejected,
      (state) => {
        state.refreshLoading = false;
        state.refreshSuccess = false;
      }
    )
  }
})

export default authSlice;