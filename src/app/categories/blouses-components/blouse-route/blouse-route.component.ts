import { Component, OnInit } from '@angular/core';
import { Item } from '../../../interface-entity/item';
import { ItemService } from '../../../services-backend/item.service';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { VerifyTokenIsExpired } from '../../../function-user/function-token-user/verify-token-is-expired';
import { Router } from '@angular/router';
import { UpdateCurrentUrlCategoriesService } from '../../service/update-current-url-categories.service';

@Component({
  selector: 'app-blouse-route',
  templateUrl: './blouse-route.component.html',
  styleUrl: './blouse-route.component.scss'
})
export class BlouseRouteComponent implements OnInit {
  nameCategory = "Feminino>Roupas>Blusa";
  itemList!: Item[];

  constructor(private router: Router, private itemService: ItemService, private googleApiService: GoogleApiService,
    private updateCurrentUrlCategoriesService: UpdateCurrentUrlCategoriesService
  ){}

  ngOnInit(): void {
    const currentUrl = this.router.url;

    this.updateCurrentUrlCategoriesService.updateUrlCurrent(currentUrl);

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

        this.itemService.GetAddressByUserId(user, this.nameCategory).subscribe({
          next: (success) => {
            const data = success.data;
            this.itemList = data;
            console.log(data);
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
