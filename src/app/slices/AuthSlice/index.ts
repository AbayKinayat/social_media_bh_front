import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../../models";
import { registration } from "./actionCreators";

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
  reducers: {
    [registration.fulfilled.name]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.authLoading = false;
      state.authSuccess = true;
    },
    [registration.pending.name]: (state) => {
      state.authLoading = true;
    },
    [registration.rejected.name]: (state) => {
      state.authLoading = false;
      state.authSuccess = false;
    }
  }
})

export default authSlice;