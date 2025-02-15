import { UserLogged } from "../../login-and-register-new-account/service/google-api.service";


export interface ResultGetUserLoggedGoogleFromLocalStorage {
  isNullUserLoggedGoogleLocalStorage: boolean;
  userLogged: UserLogged | null;
}
