import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateLastContainerInfoAboutMyAccountService {
  private updateLastContainerNumber = new BehaviorSubject<number>(-1);

  updateLastContainerNumber$ = this.updateLastContainerNumber.asObservable();

  updateupdateContainerNumber(containerNumber: number) {
    this.updateLastContainerNumber.next(containerNumber);
  }

  get currentupdateContainerNumber(): number {
    return this.updateLastContainerNumber.getValue();
  }
}
