import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-price-all',
  templateUrl: './price-all.component.html',
  styleUrl: './price-all.component.scss'
})
export class PriceAllComponent implements AfterViewInit {
  @Input() spanText!: string;
  @Input() quantity!: string;
  @Input() indexApp = '0';

  @ViewChild('containerPriceMain') containerPriceMain!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    if(this.indexApp === "1"){
      this.containerPriceMain.nativeElement.style.marginBottom = "0px";
    }
  }
}
