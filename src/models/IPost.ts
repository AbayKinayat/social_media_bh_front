import { IDateModel } from "./IDateModel"
import { ITag } from "./ITag"
import { IUser } from "./IUser"

export interface IPostImage extends IDateModel {
  id: number,
  postId: number,
  image: string,
}

export interface IPost extends IDateModel {
  id: number,
  title: string,
  description: string,
  userId: number,
  views: number,
  tagId: number,
  images?: IPostImage[],
  tag?: ITag,
  usersWhenLikes?: IUser
}