import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from '../interface-entity/user';

export interface ResultData {
  data: User;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  CreateUser(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`/api/public/user/create`, user, options).pipe(take(1));
  }

  // GetFlashSaleProductByProductFlashSaleId(productOfferFlashId: string, userId: string, token: string){
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //     'uid': userId
  //   });

  //   const options = {
  //     headers: headers,
  //   };

  //   return this._http.get<ResultData>(`/api/flash-sale-product-all-info/get-flash-sale-product-by-product-flash-sale-id/${productOfferFlashId}`, options).pipe(take(1));
  // }
}
