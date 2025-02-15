import { environment } from "../../../environments/environment";
import CryptoJS from 'crypto-js';
import { UserLogged } from "../../login-and-register-new-account/service/google-api.service";

export interface EncryptedUser {
  encryptionSuccessful: boolean;
}

export const EncryptedUserLoggedWithGoogle = (userLogged: UserLogged): EncryptedUser => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const secretKey = environment.angularAppSecretuserLogged;

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userLogged), secretKey).toString();

    localStorage.setItem("userLogged", encrypted);

    return { encryptionSuccessful: true };
  }

  return { encryptionSuccessful: false };
};
