import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhereIsComingCustomerPanelAndRegisterUserService {
  private urlName = new BehaviorSubject<string>("");

  urlName$ = this.urlName.asObservable();

  updateUrlName(number: string) {
  this.urlName.next(number);
  }

  get currentUrlName(): string | null {
  return this.urlName.getValue();
  }
}
