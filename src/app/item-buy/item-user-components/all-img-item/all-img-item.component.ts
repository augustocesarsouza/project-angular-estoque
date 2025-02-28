import { Component, ElementRef, Input, QueryList, ViewChildren, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-all-img-item',
  templateUrl: './all-img-item.component.html',
  styleUrl: './all-img-item.component.scss'
})
export class AllImgItemComponent implements AfterViewInit, OnChanges {
  @Input() imgProductAll!: string[];
  @Input() whichIndexImgIs!: number;
  @Input() updateValueWhichIndexImgIs!: (value: number) => void;
  @Input() updateValueWhichImgShowUser!: (value: string) => void;
  @Input() getValueContainerImgHighlight!: (value: QueryList<ElementRef<HTMLDivElement>>) => void;

  @ViewChildren('containerImgHighlight') containerImgHighlight!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.getValueContainerImgHighlight(this.containerImgHighlight);

    this.cdr.detectChanges();
  }

  onClickImgHighlight(imgHighlight: HTMLDivElement, indexImg: number){
    const img = this.imgProductAll[indexImg];
    this.updateValueWhichIndexImgIs(indexImg);
    this.updateValueWhichImgShowUser(img);

    this.containerImgHighlight.toArray().forEach((img) => {
      img.nativeElement.className = "";
    });

    imgHighlight.className = "img-highlight";
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['whichIndexImgIs'] && !changes['whichIndexImgIs'].firstChange) {
      this.containerImgHighlight.toArray().forEach((img) => {
        img.nativeElement.className = "";
      });

      this.containerImgHighlight.toArray()[this.whichIndexImgIs].nativeElement.className = "img-highlight";
      this.cdr.detectChanges();
    }
  }
}
