import { Component, ElementRef, OnInit, QueryList, ChangeDetectorRef } from '@angular/core';
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
  imgProductAll!: string[];

  whichImgShowUser!: string;
  whichIndexImgIs = 0;
  colorsItem = ["black", "red"];
  sizes!: string[];

  // @ViewChildren('containerImgHighlight') containerImgHighlight!: QueryList<ElementRef<HTMLDivElement>>;
  containerImgHighlight!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private cdr: ChangeDetectorRef, private itemService: ItemService, private googleApiService: GoogleApiService, private router: Router){}

  ngOnInit(): void {
    this.updateValueWhichIndexImgIs = this.updateValueWhichIndexImgIs.bind(this);
    this.updateValueWhichImgShowUser = this.updateValueWhichImgShowUser.bind(this);
    this.getValueContainerImgHighlight = this.getValueContainerImgHighlight.bind(this);

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
            this.imgProductAll = data.imgProductAll;

            this.whichImgShowUser = this.imgProductAll[0];
            this.getSizeItem(data);
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

  updateValueWhichIndexImgIs(value: number){
    this.whichIndexImgIs = value;
  }

  updateValueWhichImgShowUser(value: string){
    this.whichImgShowUser = value;
  }

  getValueContainerImgHighlight(value: QueryList<ElementRef<HTMLDivElement>>){
    this.containerImgHighlight = value;
    this.cdr.detectChanges();
  }

  getSizeItem (data: Item) {
    const sizes = data.size.split(",");
    this.sizes = sizes;
  }
}
