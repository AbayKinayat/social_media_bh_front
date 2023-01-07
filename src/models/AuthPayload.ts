import { ICurrentUser } from "./ICurrentUser";

export interface AuthPayload {
  user: ICurrentUser,
  accessToken: string;
  refreshToken: string;
}