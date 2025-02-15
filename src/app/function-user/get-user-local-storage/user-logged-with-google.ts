

import CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { ResultGetUserLoggedGoogleFromLocalStorage } from './ResultGetUserLoggedGoogleFromLocalStorage';

export const UserLoggedWithGoogle = (): ResultGetUserLoggedGoogleFromLocalStorage => {
  const resultGetUserLoggedGoogleFromLocalStorage: ResultGetUserLoggedGoogleFromLocalStorage = {
    isNullUserLoggedGoogleLocalStorage: false,
    userLogged: null,
  };

  if(typeof window === "undefined") return resultGetUserLoggedGoogleFromLocalStorage;
  const userLocalStorage = localStorage.getItem('userLogged');

  if (userLocalStorage) {
    const secretKey = environment.angularAppSecretuserLogged;

    if (secretKey === undefined) {
      return resultGetUserLoggedGoogleFromLocalStorage;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(userLocalStorage, secretKey);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

      const decryptedData = JSON.parse(decryptedString);
      resultGetUserLoggedGoogleFromLocalStorage.userLogged = decryptedData;

      return resultGetUserLoggedGoogleFromLocalStorage;
    } catch (error) {
      console.error('Erro ao converter os dados descriptografados:', error);
      return resultGetUserLoggedGoogleFromLocalStorage;
    }
  } else {
    resultGetUserLoggedGoogleFromLocalStorage.isNullUserLoggedGoogleLocalStorage = true;
    return resultGetUserLoggedGoogleFromLocalStorage;
  }
};
