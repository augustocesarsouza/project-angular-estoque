import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-real-and-discount',
  templateUrl: './price-real-and-discount.component.html',
  styleUrl: './price-real-and-discount.component.scss'
})
export class PriceRealAndDiscountComponent {
  @Input() discountPercentage!: number;
  @Input() priceProduct!: number;

  priceProductOriginal(priceProduct: number) {
    const priceString = priceProduct.toFixed(2).replace(".", ",");
    const priceToShow = "R$ " + priceString;
    return priceToShow;
  }

  priceDiscount(priceProduct: number) {
    const priceDiscount = (priceProduct * (this.discountPercentage / 100)).toFixed(2).replace(".", ",");
    const priceDiscountToReturn = "R$ " + priceDiscount;

    return priceDiscountToReturn;
  }

  priceInstallment(priceProduct: number){
    const priceDiscount = (priceProduct * (this.discountPercentage / 100));

    const priceDividedThree = priceDiscount / 3;
    const priceDividedThreeString = priceDividedThree.toFixed(2).replace(".", ",");

    return `ou 3x de R$ ${priceDividedThreeString}`;
  }
}
