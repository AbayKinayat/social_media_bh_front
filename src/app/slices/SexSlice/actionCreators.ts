import { ISex } from './../../../models/ISex';
import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../../http";

export const fetchSexs = createAsyncThunk("sexs/fetch", async (_, thunkApi) => {
  try {
    const {
      data
    } = await $api.get<ISex[]>("/sex");

    return data;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
})
