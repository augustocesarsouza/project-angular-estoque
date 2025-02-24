import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Item } from '../../../../interface-entity/item';

@Component({
  selector: 'app-blouse-first',
  templateUrl: './blouse-first.component.html',
  styleUrl: './blouse-first.component.scss'
})
export class BlouseFirstComponent {
  @Input() itemList!: Item[];

  numberIndex = 0;
  quantityNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  @ViewChildren('containerNumbers') containerNumbers!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('containerColumnFirst') containerColumnFirst!: ElementRef<HTMLDivElement>;
  @ViewChild('containerColumnSecond') containerColumnSecond!: ElementRef<HTMLDivElement>;

  onClickNumbers(numberClicked: number){
    this.numberIndex = numberClicked;
    const arrayNumbers = this.containerNumbers.toArray();

    arrayNumbers.map((el) => {
      el.nativeElement.className = "container-numbers-before-after";
    });

    const objNumber = arrayNumbers[numberClicked];
    objNumber.nativeElement.className = "container-numbers-before-after-clicked";
  }

  onClickBefore() {
    const arrayNumbers = this.containerNumbers.toArray();

    let indexNext = this.numberIndex  - 1;

    if(indexNext === -1){
      indexNext = arrayNumbers.length - 1;
    }

    this.numberIndex = indexNext;

    arrayNumbers.map((el) => {
      el.nativeElement.className = "container-numbers-before-after";
    });

    arrayNumbers[indexNext].nativeElement.className = "container-numbers-before-after-clicked";
  }

  onClickAfter() {
    const arrayNumbers = this.containerNumbers.toArray();

    let indexNext = this.numberIndex  + 1;

    if(indexNext === arrayNumbers.length){
      indexNext = 0;
    }

    this.numberIndex = indexNext;

    arrayNumbers.map((el) => {
      el.nativeElement.className = "container-numbers-before-after";
    });

    arrayNumbers[indexNext].nativeElement.className = "container-numbers-before-after-clicked";
  }

  onClickColumnFirst(){
    const spansFirst = this.containerColumnFirst.nativeElement.querySelectorAll("span") as NodeListOf<HTMLSpanElement>;
    const spansSecond = this.containerColumnSecond.nativeElement.querySelectorAll("span") as NodeListOf<HTMLSpanElement>;

    spansFirst.forEach((span) => {
      span.style.background = "#999";
    });

    spansSecond.forEach((span) => {
      span.style.background = "rgba(153, 153, 153, 0.4)";
    });
  }

  onClickColumnSecond(){
    const spansFirst = this.containerColumnFirst.nativeElement.querySelectorAll("span") as NodeListOf<HTMLSpanElement>;
    const spansSecond = this.containerColumnSecond.nativeElement.querySelectorAll("span") as NodeListOf<HTMLSpanElement>;

    spansFirst.forEach((span) => {
      span.style.background = "rgba(153, 153, 153, 0.4)";
    });

    spansSecond.forEach((span) => {
      span.style.background = "#999";
    });
  }
}
