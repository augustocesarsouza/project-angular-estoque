import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface-entity/user';
import { ReviewItem } from '../interface-entity/review-item';
import { take } from 'rxjs';

export interface ResultData {
  data: ReviewItem;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewItemService {
  constructor(private _http: HttpClient) { }

  createAddress(reviewItem: unknown, user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': user.id
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`/api/review-item/create`, reviewItem, options).pipe(take(1));
  }
}
