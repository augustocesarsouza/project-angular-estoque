import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quantity-column-main',
  templateUrl: './quantity-column-main.component.html',
  styleUrl: './quantity-column-main.component.scss'
})
export class QuantityColumnMainComponent {
  @Input() functionClickFirstColumnOrSecond!: (whichClicked: string) => void;

  @ViewChild('containerColumnFirst') containerColumnFirst!: ElementRef<HTMLDivElement>;
  @ViewChild('containerColumnSecond') containerColumnSecond!: ElementRef<HTMLDivElement>;

  onClickColumnFirst(){
    this.functionClickFirstColumnOrSecond("first");
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
    this.functionClickFirstColumnOrSecond("second");
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
