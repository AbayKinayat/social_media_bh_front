import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../../http";
import { IUser } from "../../../models";
import { AuthPayload } from "../../../models/AuthPayload";
import { CreateUser } from "../../../models/CreateUser";

export const registration = createAsyncThunk("registration", async (values: CreateUser, thunkApi) => {
  try {
    const {
      data: {
        user,
        accessToken
      }
    } = await $api.post<AuthPayload>("/auth/registration", values);

    localStorage.setItem("token", accessToken);
    return user;
  } catch(e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
})