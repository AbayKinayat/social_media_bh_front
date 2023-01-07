import { IDateModel } from "./IDateModel";

export interface ITag extends IDateModel {
  id: number, 
  nameKz: string,
  nameRu: string,
  nameEn: string
}