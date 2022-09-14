import { IUser } from "./IUser";

export interface AuthPayload {
  user: IUser,
  accessToken: string;
  refreshToken: string;
}