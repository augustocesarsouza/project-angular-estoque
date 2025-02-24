import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-size-all',
  templateUrl: './size-all.component.html',
  styleUrl: './size-all.component.scss'
})
export class SizeAllComponent implements AfterViewInit {
  @Input() spanText!: string;
  @Input() quantity!: string;
  @Input() indexApp = '0';

  @ViewChild('containerSizeMain') containerSizeMain!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    if(this.indexApp === "1"){
      this.containerSizeMain.nativeElement.style.marginBottom = "0px";
    }
  }
}
