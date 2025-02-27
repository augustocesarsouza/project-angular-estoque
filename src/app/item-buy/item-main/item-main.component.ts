import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  isZoomActive = false;

  @ViewChildren('containerImgHighlight') containerImgHighlight!: QueryList<ElementRef<HTMLDivElement>>;

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
            this.item = data;
            this.imgProductAll = data.imgProductAll;

            this.whichImgShowUser = this.imgProductAll[0];
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

  onClickImgHighlight(imgHighlight: HTMLDivElement, indexImg: number){

    const img = this.imgProductAll[indexImg];
    this.whichIndexImgIs = indexImg;
    this.whichImgShowUser = img;

    this.containerImgHighlight.toArray().forEach((img) => {
      img.nativeElement.className = "";
    });

    imgHighlight.className = "img-highlight";
  }

  onClickSvgLeft() {
    if(this.whichIndexImgIs <= 0){
      const lastIndex = this.imgProductAll.length - 1;

      this.whichIndexImgIs = lastIndex;
      const img = this.imgProductAll[lastIndex];
      this.whichImgShowUser = img;
    }else {
      const img = this.imgProductAll[this.whichIndexImgIs - 1];
      this.whichIndexImgIs = this.whichIndexImgIs - 1;
      this.whichImgShowUser = img;
    }

    this.putBorderContainerImgHighlight(this.whichIndexImgIs);
  }

  onClickSvgRight() {
    const valueMax = this.imgProductAll.length - 1;

    if(this.whichIndexImgIs >= valueMax){
      const firstIndex = 0;
      this.whichIndexImgIs = firstIndex;
      const img = this.imgProductAll[firstIndex];
      this.whichImgShowUser = img;
    }else {
      const nextImg = this.whichIndexImgIs + 1;
      this.whichIndexImgIs= nextImg;
      const img = this.imgProductAll[nextImg];
      this.whichImgShowUser = img;
    }

    this.putBorderContainerImgHighlight(this.whichIndexImgIs);
  }

  putBorderContainerImgHighlight (index: number){
    this.containerImgHighlight.toArray().forEach((img) => {
      img.nativeElement.className = "";
    });

    this.containerImgHighlight.toArray()[index].nativeElement.className = "img-highlight";
  }

  onEnter(img: HTMLImageElement) {
    this.isZoomActive = true;
    img.style.transition = 'none'; // Remove transição para um efeito imediato
  }

  onZoom(event: MouseEvent, img: HTMLImageElement) {
    if (!this.isZoomActive) return;

    const { offsetX, offsetY } = event;
    const { width, height } = img;

    // Calcula a posição do zoom com base no mouse
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = 'scale(2)'; // Ajuste conforme necessário
  }

  onLeave(img: HTMLImageElement) {
    this.isZoomActive = false;
    img.style.transition = 'transform 0.2s ease-out';
    img.style.transform = 'scale(1)'; // Volta ao tamanho original
  }
}
