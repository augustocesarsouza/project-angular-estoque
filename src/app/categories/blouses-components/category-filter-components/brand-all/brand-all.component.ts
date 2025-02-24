import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-brand-all',
  templateUrl: './brand-all.component.html',
  styleUrl: './brand-all.component.scss'
})
export class BrandAllComponent implements AfterViewInit {
  @Input() spanText!: string;
  @Input() quantity!: string;
  @Input() indexApp = '0';

  @ViewChild('containerBrandMain') containerBrandMain!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    if(this.indexApp === "1"){
      this.containerBrandMain.nativeElement.style.marginBottom = "0px";
    }
  }
}
