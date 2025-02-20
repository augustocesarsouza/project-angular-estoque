import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhichUrlWasClickedCustomerPanelService {
   private WhichUrl = new BehaviorSubject<string>("");

   WhichUrl$ = this.WhichUrl.asObservable();

  updateWhichUrl(url: string) {
    this.WhichUrl.next(url);
  }

  get currentWhichUrl(): string {
    return this.WhichUrl.getValue();
  }
}
