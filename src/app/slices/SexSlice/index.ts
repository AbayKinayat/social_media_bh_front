import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISex } from "../../../models/ISex";
import { fetchSexs } from "./actionCreators";

interface SexState {
  sexs: ISex[],
  loading: boolean,
  error: string
}

const initialState: SexState = {
  sexs: [],
  loading: false,
  error: ''
}

const sexSlice = createSlice({
  name: "sexs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSexs.fulfilled,
      (state, action: PayloadAction<ISex[]>) => {
        state.sexs = action.payload;
        state.loading = false;
        state.error = "";
      }
    )
    builder.addCase(
      fetchSexs.pending,
      (state) => {
        state.loading = true;
      }
    )
    builder.addCase(
      fetchSexs.rejected,
      (state, value) => {
        state.loading = false;
        state.error = value?.error?.message || "";
      }
    )
  }
})

export default sexSlice;