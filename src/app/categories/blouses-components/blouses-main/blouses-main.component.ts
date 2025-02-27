import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../../services-backend/item.service';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { VerifyTokenIsExpired } from '../../../function-user/function-token-user/verify-token-is-expired';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { Item } from '../../../interface-entity/item';

@Component({
  selector: 'app-blouses-main',
  templateUrl: './blouses-main.component.html',
  styleUrl: './blouses-main.component.scss'
})
export class BlousesMainComponent implements OnInit {
  nameCategory = "Feminino>Roupas>Blusa";
  itemList!: Item[];
  routeBrowsing = "Blusa";

  constructor(private router: Router, private itemService: ItemService, private googleApiService: GoogleApiService){}

  ngOnInit(): void {
    this.onClickBrowsingRote = this.onClickBrowsingRote.bind(this);

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

  onClickBrowsingRote (rote: string) {
    if(rote === "PaginaInicial"){
      this.routeBrowsing = rote;
      const roteUser = "/";
      this.router.navigate([roteUser]);
    }

    if(rote === "Roupas"){
      this.routeBrowsing = rote;
      const roteUser = "feminino/roupas";
      this.router.navigate([roteUser]);
    }

    if(rote === "Feminino"){
      this.routeBrowsing = rote;
      const roteUser = "feminino/";
      this.router.navigate([roteUser]);
    }
  }
}
