import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from '../interface-entity/user';
import { UserAddress } from '../interface-entity/user-address';

export interface ResultData {
  data: User;
}

export interface ResultDataGetInfoUserAddress {
  data: UserAddress;
}

export interface ResultDataLogin {
  data: {
    passwordIsCorrect: true;
    userDTO: User;
  }
}

export interface ResultDataChangePassword {
  data: ChangePassword;
}

export interface ResultDataVerifyCodeToLogin {
  data: CodeVerify;
}

export interface UserUpdate {
  userId: string;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  cpf: string;
  email: string;
  landline: string;
  cellPhone: string;
  userImage: string | null;
  confirmEmail: number;
  token: string;
}

export interface UserUpdatePassword {
  actualPassword: string
  newPassword: string
  userId: string;
  email: string;
}


export interface ChangePassword {
  changePasswordSuccessfully: boolean;
  passwordValid: boolean;
}

interface CodeVerify {
  codeFoundSuccessfully: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  Login(email: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
    .set('email', email)
    .set('password', password);

    return this._http.get<ResultDataLogin>(`/api/public/user/login`, {headers, params}).pipe(take(1));
  }

  GetUser(userId: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
      // 'uid': userId
    });

    const options = {
      headers: headers,
    };

    return this._http.get<ResultData>(`/api/public/user/find-by-id/${userId}`, options).pipe(take(1));
  }

  FindByIdToDatePersonal(user: User){
    const userId = user.id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    return this._http.get<ResultDataGetInfoUserAddress>(`/api/user/find-by-id-to-date-personal/${userId}`, options).pipe(take(1));
  }

  VerifyCodeToLogin(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
      // 'uid': userId
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultDataVerifyCodeToLogin>(`/api/public/user/verify-code-to-login`, user, options).pipe(take(1));
  }

  createAccount(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`/api/public/user/create`, user, options).pipe(take(1));
  }

  createAccountWithGoogle(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`/api/public/user/verify-if-user-exist-to-create-login-with-google`, user, options).pipe(take(1));
  }

  PutUserInfo(user: UserUpdate){
    const userId = user.userId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // return this._http.put<ResultData>(`/api/user/update-info`, options).pipe(take(1));
    return this._http.put<ResultData>(`/api/user/update-info`, user, options).pipe(take(1));
  }

  PutChangePassword(user: UserUpdatePassword, token: string){
    const userId = user.userId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // return this._http.put<ResultData>(`/api/user/update-info`, options).pipe(take(1));
    return this._http.put<ResultDataChangePassword>(`/api/user/change-password`, user, options).pipe(take(1));
  }
}
