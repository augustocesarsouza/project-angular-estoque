import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../../../../interface-entity/item';

@Component({
  selector: 'app-blouse-item',
  templateUrl: './blouse-item.component.html',
  styleUrl: './blouse-item.component.scss'
})
export class BlouseItemComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() item!: Item;
  @Input() whichClicked!: string;

  whichImgShow = "";
  sizeText = "";
  @ViewChild('flipContainer') flipContainer!: ElementRef;
  @ViewChild('containerFront') containerFront!: ElementRef<HTMLDivElement>;
  @ViewChild('containerBack') containerBack!: ElementRef<HTMLDivElement>;
  @ViewChild('buttonAddCar') buttonAddCar!: ElementRef<HTMLButtonElement>;
  @ViewChild('buttonSizes') buttonSizes!: ElementRef<HTMLButtonElement>;

  @ViewChild('containerItem') containerItem!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    const imgMain = this.item.imgProductAll[0];
    this.whichImgShow = imgMain;

    const sizes = this.item.size.split(',');

    let sizeText = "";

    sizes.forEach((el, i) => {
      sizeText += el;

      if(sizes.length > i + 1){
        sizeText += " ";
      }
    });

    this.sizeText = sizeText;
  }

  ngAfterViewInit(): void {
    const imgMain = this.item.imgProductAll[0];
    const imgTras = this.item.imgProductAll[1];
    this.containerFront.nativeElement.style.backgroundImage = `url(${imgMain})`;
    this.containerFront.nativeElement.style.backgroundSize = "contain";
    this.containerFront.nativeElement.style.backgroundPosition = "center";
    this.containerFront.nativeElement.style.backgroundRepeat = "no-repeat";

    this.containerBack.nativeElement.style.backgroundImage = `url(${imgTras})`;
    this.containerBack.nativeElement.style.backgroundSize = "contain";
    this.containerBack.nativeElement.style.backgroundPosition = "center";
    this.containerBack.nativeElement.style.backgroundRepeat = "no-repeat";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['whichClicked']) {
      const value = changes['whichClicked'].currentValue;

      if(value === "first"){
        this.containerItem.nativeElement.style.maxWidth = "290px";
      }

      if(value === "second"){
        this.containerItem.nativeElement.style.maxWidth = "230px";
      }
    }
  }

  funcionNameSubstring(substring: string) {
    return substring.substring(0, 25) + "...";
  }

  funcionPriceOriginal(price: number) {
    const stringPrice = String(price);
    return "R$ " + stringPrice.replace(".", ",");
  }

  funcionPriceWithDiscount(price: number) {
    const discount = this.item.discountPercentage / 100;
    const priceWithDiscount = discount * price;
    const priceWithDiscountRounded = Number(priceWithDiscount.toFixed(2));

    const priceDiscountFinal = price - priceWithDiscountRounded;

    const priceWithDiscountString = String(priceDiscountFinal.toFixed(2));

    return "R$ " + priceWithDiscountString.replace(".", ",");
  }

  funcionPriceInstallment(price: number){
    const installmentQuantity = 3;
    const discount = this.item.discountPercentage / 100;
    const priceWithDiscount = discount * price;
    const priceWithDiscountRounded = Number(priceWithDiscount.toFixed(2));

    const priceDiscountFinal = price - priceWithDiscountRounded;
    const priceInstallment = Number(priceDiscountFinal.toFixed(2)) / installmentQuantity;

    return `${installmentQuantity}x R$ ${priceInstallment.toFixed(2).replace(".", ",")}`;
  }

  onMouseEnterContainerItem(){
    this.buttonAddCar.nativeElement.style.fontSize = "11px";
    this.buttonSizes.nativeElement.style.fontSize = "12px";
    this.buttonSizes.nativeElement.style.background = "rgba(0,0,0,0.22)";
  }

  onMouseLeaveContainerItem(){
    this.buttonAddCar.nativeElement.style.fontSize = "0px";
    this.buttonSizes.nativeElement.style.fontSize = "0px";
    this.buttonSizes.nativeElement.style.background = "#fff";
  }
}
