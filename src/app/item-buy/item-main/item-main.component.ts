import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services-backend/item.service';
import { Item } from '../../interface-entity/item';
import { UserLocalStorage } from '../../function-user/get-user-local-storage/user-local-storage';
import { VerifyTokenIsExpired } from '../../function-user/function-token-user/verify-token-is-expired';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../login-and-register-new-account/service/google-api.service';

@Component({
  selector: 'app-item-main',
  templateUrl: './item-main.component.html',
  styleUrl: './item-main.component.scss'
})
export class ItemMainComponent implements OnInit {
  item!: Item;

  constructor(private itemService: ItemService, private googleApiService: GoogleApiService, private router: Router){}

  ngOnInit(): void {
    if (typeof window === "undefined" || typeof localStorage === "undefined")return;

    const state = window.history.state;
    let itemId = "";

    if (state && state.itemId) {
      itemId = state.itemId;
    }

    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user){
        const token = user.token;

        if(token){
          const tokenIsExpired = VerifyTokenIsExpired(token);

          if(tokenIsExpired){
            localStorage.removeItem('user');
            this.router.navigate(['/']);
            return;
          }
        }

        this.itemService.GetItemByIdWithCategory(user, itemId).subscribe({
          next: (success) => {
            const data = success.data;
            console.log(data);

            this.item = data;
          },
          error: error => {
            if(error.status === 400){
              console.log(error);
            }

            if(error.status === 403){
              localStorage.removeItem('user');
              this.router.navigate(['/buyer/login']);
            }
          }
        });
      }
    }

    if(userResult.isNullUserLocalStorage){
      this.googleApiService.logout();
      localStorage.removeItem('user');
      this.router.navigate(['/']);
      return;
    };
  }
}
