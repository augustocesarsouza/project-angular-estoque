import { Component, Input } from '@angular/core';
import { Item } from '../../../interface-entity/item';

@Component({
  selector: 'app-product-details-and-exchanges-and-returns-main',
  templateUrl: './product-details-and-exchanges-and-returns-main.component.html',
  styleUrl: './product-details-and-exchanges-and-returns-main.component.scss'
})
export class ProductDetailsAndExchangesAndReturnsMainComponent {
  @Input() item!: Item;

  alreadyClickedButtonSeeMoreDetails = false;

  onClickButton(containerProductDetails: HTMLDivElement, containerTransparent: HTMLDivElement){
    containerProductDetails.style.height = "auto";
    containerTransparent.style.backgroundImage = "none";
    this.alreadyClickedButtonSeeMoreDetails = true;
  }

  onClickButtonSeeLess(containerProductDetails: HTMLDivElement, containerTransparent: HTMLDivElement){
    containerProductDetails.style.height = "100px";
    containerTransparent.style.backgroundImage = "linear-gradient(transparent, white)";
    this.alreadyClickedButtonSeeMoreDetails = false;
  }
}
// background-image: linear-gradient(transparent, white);
