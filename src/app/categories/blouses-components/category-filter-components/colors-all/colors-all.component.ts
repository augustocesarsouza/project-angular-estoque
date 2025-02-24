import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-colors-all',
  templateUrl: './colors-all.component.html',
  styleUrl: './colors-all.component.scss'
})
export class ColorsAllComponent implements AfterViewInit {
  @Input() color!: string;
  @Input() spanText!: string;
  @Input() quantity!: string;
  @Input() indexApp = '0';

  @ViewChild('containerColor') containerColor!: ElementRef<HTMLDivElement>;
  @ViewChild('containerColorMain') containerColorMain!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.containerColor.nativeElement.style.background = this.color;

    if(this.indexApp === "1"){
      this.containerColorMain.nativeElement.style.marginBottom = "0px";
    }
  }
}
