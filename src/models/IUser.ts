import { IAvatar } from "./IAvatar";
import { IDateModel } from "./IDateModel";
import { ILang } from "./ILang";
import { IPost } from "./IPost";
import { ISex } from "./ISex";

export interface IUserImage extends IDateModel {
  id: number,
  title: string
  image: string
  views: number
  user_id: number
  usersWhenLikes: IUser[]
}

export interface IUser extends IDateModel {
  id: number
  firstName: string
  lastName: string
  email: string
  secondName?: string
  phone?: string
  sexId?: number
  dateBirth?: string
  isBan?: boolean
  sex?: ISex
  avatar?: IAvatar
  langs?: ILang[]
  posts?: IPost[],
  postsWhenLikes?: IPost[]
  images?: IUserImage[]
  imagesWhenLikes?: IUserImage[]
}