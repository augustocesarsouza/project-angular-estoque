import { User } from "./user";

export interface UserAddress {
  id: string;
  fullName: string;
  phoneNumber: string;
  cep: string;
  stateCity: string;
  neighborhood: string;
  street: string;
  numberHome: string;
  complement: string;
  defaultAddress: number;

  userId: string;
  userDTO: User | null;
  saveAs: number;
}
