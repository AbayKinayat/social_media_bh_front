import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../../models";
import { authorization, registration } from "./actionCreators";

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
  refreshLoading: false,
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
  }
})

export default authSlice;