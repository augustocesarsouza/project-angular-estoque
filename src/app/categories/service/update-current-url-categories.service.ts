import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCurrentUrlCategoriesService {
  private updateUrl = new BehaviorSubject<string>("");

  updateUrl$ = this.updateUrl.asObservable();

  updateUrlCurrent(url: string) {
    this.updateUrl.next(url);
  }

  get currentUrl(): string {
    return this.updateUrl.getValue();
  }
}
