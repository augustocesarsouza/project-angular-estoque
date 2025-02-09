import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interface-entity/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private updateUser = new BehaviorSubject<User | null>(null);

  updateUser$ = this.updateUser.asObservable();

   updateupdateUser(updateUser: User) {
   this.updateUser.next(updateUser);
   }

   get currentupdateUser(): User | null {
   return this.updateUser.getValue();
   }
}
