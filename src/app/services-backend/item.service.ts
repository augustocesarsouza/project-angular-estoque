import { Injectable } from '@angular/core';
import { Item } from '../interface-entity/item';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from '../interface-entity/user';

export interface ResultData {
  data: Item;
}

export interface ResultDataArray {
  data: Item[];
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) { }

  GetAddressByUserId(user: User, nameCategory: string){
    const userId = user.id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': userId
    });

    const params = new HttpParams().set('nameCategory', nameCategory);

    return this._http.get<ResultDataArray>(`/api/item/get-all-item-by-name-category`, {headers, params}).pipe(take(1));
  }
}
