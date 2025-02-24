import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface-entity/user';
import { ImgHighlight } from '../interface-entity/img-highlight';
import { take } from 'rxjs';

export interface ResultDataArray {
  data: ImgHighlight[];
}

@Injectable({
  providedIn: 'root'
})
export class ImgHighlightService {
  constructor(private _http: HttpClient) { }

  GetAllImgHighlights(user: User){
    const userId = user.id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      'uid': userId
    });

    return this._http.get<ResultDataArray>(`/api/img-highlight/get-all-img-highlights`, {headers}).pipe(take(1));
  }
}
