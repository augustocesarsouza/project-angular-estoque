import { Category } from "./category";

export interface Item {
  id: string;
  name: string;
  priceProduct: number;
  discountPercentage: number;
  size: string;
  brand: string;
  category: Category;
  imgProductAll: string[];
}
