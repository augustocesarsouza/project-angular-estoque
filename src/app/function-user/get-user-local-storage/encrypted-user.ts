import { environment } from "../../../environments/environment";
import { User } from "../../interface-entity/user";
import CryptoJS from 'crypto-js';

export interface EncryptedUser {
  encryptionSuccessful: boolean;
}

export const EncryptedUser = (user: User): EncryptedUser => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const secretKey = environment.angularAppSecretKeyUser;

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(user), secretKey).toString();

    localStorage.setItem("user", encrypted);

    return { encryptionSuccessful: true };
  }

  return { encryptionSuccessful: false };
};
