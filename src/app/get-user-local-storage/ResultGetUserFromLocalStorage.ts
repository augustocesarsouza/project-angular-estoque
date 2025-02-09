import { User } from "../interface-entity/user";

export interface ResultGetUserFromLocalStorage {
  isNullUserLocalStorage: boolean;
  user: User | null;
}
