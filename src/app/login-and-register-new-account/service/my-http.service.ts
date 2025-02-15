import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../interface-entity/user';

export interface ResultAuth {
  url: string;
}

export interface ResultAuthPrivate {
  data: User;
}

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  token = "";

  constructor(private http: HttpClient) { }

  authUrl(): Observable<ResultAuth>  {
    const result = this.http.get("http://localhost:8080/v1/auth/url") as Observable<ResultAuth>;
    return result;
  }

  authenticationLoginGoogle(): Observable<ResultAuthPrivate> {
    return this.http.get("http://localhost:8080/v1/login-google" , {headers: new HttpHeaders({"Authorization": "Bearer " + this.token})}) as Observable<ResultAuthPrivate>;
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:8080/v1/auth/callback?code=" + code, {observe: "response"})
    .pipe(map((response: HttpResponse<Token>) => {
      if (response.status === 200 && response.body !== null) {
        this.token = response.body.token;

        return true;
      } else {
        return false;
      }
    }));
  }
}

class Token {
  token!: string;
  constructor(public code: string){};
}

export class Message {
  constructor(public message: string) {}
}
