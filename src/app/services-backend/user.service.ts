import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from '../interface-entity/user';

export interface ResultData {
  data: User;
}

export interface ResultData {
  data: User;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

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

  createAccount(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // Colocar "Bearer" token e validar se der error o token tiver sem validação vai lançar error

    console.log(options);


    return this._http.post<ResultData>(`/api/public/user/create`, user, options).pipe(take(1));
  }
}
