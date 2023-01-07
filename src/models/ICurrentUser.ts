export interface ICurrentUser {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  sexId?: number
  secondName?: string
  phone?: string
  dateBirth?: string
  isBan: boolean
  // sex: Sex;
  // avatar: Avatars
  // langs: Langs[]
  // posts: Posts[]
  // postsWhenLikes: Posts[]
  // images: UsersImages[]
  // imagesWhenLikes: UsersImages[]
}