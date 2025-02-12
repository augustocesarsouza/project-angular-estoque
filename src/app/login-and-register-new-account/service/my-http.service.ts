import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface ResultAuth {
  url: string;
}

interface ResultAuthPrivate {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  token = "";

  constructor(private http: HttpClient) { }

  get(url: string): Observable<ResultAuth>  {
    const result = this.http.get("http://localhost:8080/v1" + url) as Observable<ResultAuth>;
    return result;
  }

  authenticationLoginGoogle(url: string): Observable<ResultAuthPrivate> {
    return this.http.get("http://localhost:8080/v1" + url, {headers: new HttpHeaders({"Authorization": "Bearer " + this.token})}) as Observable<ResultAuthPrivate>;
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
