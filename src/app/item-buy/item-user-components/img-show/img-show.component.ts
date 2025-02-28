import { ChangeDetectorRef, Component, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-img-show',
  templateUrl: './img-show.component.html',
  styleUrl: './img-show.component.scss'
})
export class ImgShowComponent {
  @Input() whichIndexImgIs!: number;
  @Input() imgProductAll!: string[];
  @Input() whichImgShowUser!: string;
  @Input() containerImgHighlight!: QueryList<ElementRef<HTMLDivElement>>;
  @Input() updateValueWhichIndexImgIs!: (value: number) => void;
  @Input() updateValueWhichImgShowUser!: (value: string) => void;

  isZoomActive = false;
  // @Input() getValueContainerImgHighlight!: (value: QueryList<ElementRef<HTMLDivElement>>) => void;

  constructor(private cdr: ChangeDetectorRef) {}

  onClickSvgLeft() {
    if(this.whichIndexImgIs <= 0){
      const lastIndex = this.imgProductAll.length - 1;

      this.updateValueWhichIndexImgIs(lastIndex);
      const img = this.imgProductAll[lastIndex];
      this.updateValueWhichImgShowUser(img);
    }else {
      const value = this.whichIndexImgIs - 1;
      const img = this.imgProductAll[value];
      this.updateValueWhichIndexImgIs(value);
      this.updateValueWhichImgShowUser(img);
    }

    this.putBorderContainerImgHighlight(this.whichIndexImgIs);
  }

  onClickSvgRight() {
    const valueMax = this.imgProductAll.length - 1;

    if(this.whichIndexImgIs >= valueMax){
      const firstIndex = 0;
      this.updateValueWhichIndexImgIs(firstIndex);
      const img = this.imgProductAll[firstIndex];
      this.updateValueWhichImgShowUser(img);
    }else {
      const nextImg = this.whichIndexImgIs + 1;

      this.updateValueWhichIndexImgIs(nextImg);
      const img = this.imgProductAll[nextImg];

      this.updateValueWhichImgShowUser(img);
    }

    this.putBorderContainerImgHighlight(this.whichIndexImgIs);
  }

  putBorderContainerImgHighlight (index: number){
    this.containerImgHighlight.toArray().forEach((img) => {
      img.nativeElement.className = "";
    });

    this.containerImgHighlight.toArray()[index].nativeElement.className = "img-highlight";
  }

  onEnter(img: HTMLImageElement) {
    this.isZoomActive = true;
    img.style.transition = 'none';
  }

  onZoom(event: MouseEvent, img: HTMLImageElement) {
    if (!this.isZoomActive) return;

    const { offsetX, offsetY } = event;
    const { width, height } = img;

    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = 'scale(2)';
  }

  onLeave(img: HTMLImageElement) {
    this.isZoomActive = false;
    img.style.transition = 'transform 0.2s ease-out';
    img.style.transform = 'scale(1)';
  }
}
