import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../../http";
import { AuthPayload } from "../../../models/AuthPayload";
import { AuthUser } from "../../../models/AuthUser";
import { CreateUser } from "../../../models/CreateUser";

export const registration = createAsyncThunk("auth/registration", async (values: CreateUser, thunkApi) => {
  try {
    const {
      data: {
        user,
        accessToken
      }
    } = await $api.post<AuthPayload>("/auth/local/registration", values);

    localStorage.setItem("token", accessToken);
    return user;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
})

export const authorization = createAsyncThunk("auth/authorization", async (values: AuthUser, thunkApi) => {
  try {
    const { data: {
      accessToken,
      user
    } } = await $api.post<AuthPayload>("/auth/local/login", values);

    localStorage.setItem("token", accessToken);
    return user;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await $api.post("/auth/logout");
    localStorage.removeItem("token");
    return null;
  } catch(e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
})

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const { data: {
      accessToken,
      user
    } } = await $api.post<AuthPayload>("/auth/refresh");
    localStorage.setItem("token", accessToken);
    return user;
  } catch(e: any) {
    return thunkApi.rejectWithValue(e.message);
  }
})