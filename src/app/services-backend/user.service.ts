import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from '../interface-entity/user';

export interface ResultData {
  data: User;
}

export interface ResultDataLogin {
  data: {
    passwordIsCorrect: true;
    userDTO: User;
  }
}

export interface ResultDataVerifyCodeToLogin {
  data: CodeVerify;
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

    const options = {
      headers: headers,
    };

    return this._http.get<ResultDataLogin>(`/api/public/user/login/${email}/${password}`, options).pipe(take(1));
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

    // Colocar "Bearer" token e validar se der error o token tiver sem validação vai lançar error

    return this._http.post<ResultData>(`/api/public/user/create`, user, options).pipe(take(1));
  }
}
