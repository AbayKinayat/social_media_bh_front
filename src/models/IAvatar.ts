import { IDateModel } from "./IDateModel";

export interface IAvatar extends IDateModel {
  id: number,
  userId: number,
  image: string,
  likes: number,
  views: number
}