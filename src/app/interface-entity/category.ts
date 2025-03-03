import { Item } from "./item";

export interface Category {
  id: string;
  nameCategory: string;
  items: Item[] | null;
}
