import { Injectable } from '@angular/core';
import { UserAddress } from '../interface-entity/user-address';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from '../interface-entity/user';

export interface ResultData {
  data: UserAddress;
}

export interface ResultDataArray {
  data: UserAddress[];
}

@Injectable({
  providedIn: 'root'
})
export class AddressUserService {

  constructor(private _http: HttpClient) { }

  GetAddressByUserId(user: User){
    const userId = user.id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': userId
    });

    const params = new HttpParams()
        .set('userId', userId);

    return this._http.get<ResultDataArray>(`/api/user-address/get-user-by-user-id`, {headers, params}).pipe(take(1));
  }

  createAddress(address: unknown, user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': user.id
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`/api/user-address/create`, address, options).pipe(take(1));
  }

  updateAddressDefault(address: unknown, user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': user.id
    });

    const options = {
      headers: headers,
    };

    return this._http.put<ResultData>(`/api/user-address/update-only-default-address`, address, options).pipe(take(1));
  }

  updateAddress(address: unknown, user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': user.id
    });

    const options = {
      headers: headers,
    };

    return this._http.put<ResultData>(`/api/user-address/update`, address, options).pipe(take(1));
  }

  deleteAddress(addressId: string, user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': user.id
    });

    const params = new HttpParams()
    .set('userAddressId', addressId);

    return this._http.delete<ResultData>(`/api/user-address/delete`, {headers, params}).pipe(take(1));
  }
}
