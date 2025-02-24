import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-types-to-choose',
  templateUrl: './types-to-choose.component.html',
  styleUrl: './types-to-choose.component.scss'
})
export class TypesToChooseComponent implements AfterViewInit {
  @Input() onClickColorPriceRangeBrandSize!: (svg: HTMLElement, container: HTMLDivElement, whichClicked: string) => void;
  @Input() typeClicked!: string;
  @Input() typeSpan!: string;

  @ViewChild('containerTypesToChoose') containerTypesToChoose!: ElementRef<HTMLDivElement>;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.typeClicked === 'color') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '45');
    }

    this.cdr.detectChanges();
  }

  setZIndex(value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', value);
  }
}
