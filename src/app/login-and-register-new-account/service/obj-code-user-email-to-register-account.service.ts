import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjCodeUserEmailToRegisterAccountService {
  private objCode = new BehaviorSubject<Record<string, string>>({});

  objCode$ = this.objCode.asObservable();

  updateobjCode(objCode: Record<string, string>) {
    this.objCode.next(objCode);
  }

  get currentObjCode(): Record<string, string> {
    return this.objCode.getValue();
  }
}
