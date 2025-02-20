import { Component, NgZone, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-highlight-main',
  templateUrl: './img-highlight-main.component.html',
  styleUrl: './img-highlight-main.component.scss'
})
export class ImgHighlightMainComponent implements OnInit, AfterViewInit {
  @ViewChild('containerCarouselCustom') containerCarouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  intervalId!: number;
  setTimeoutId!: number;

  imgsHighlight: string[] = [];

  constructor(private ngZone: NgZone){}

  whichImgNow = 0;

  ngOnInit(): void {
    const array = ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740056375/imgs-backend-estoque/img-home-page/859_banner638754756089097391_g3zqvy.webp", "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740056380/imgs-backend-estoque/img-home-page/1651_banner638749719514083764_ujkvcx.webp"];
    this.imgsHighlight = array;
  }

  ngAfterViewInit(): void {
    if (typeof document === 'undefined') return;

    this.ngZone.runOutsideAngular(() => this.initCarousel());
    this.ngZone.runOutsideAngular(() => this.startToggleScroll());
  }

  startToggleScroll(): void {
    if (typeof window === "undefined")return;

    clearTimeout(this.intervalId);

    this.intervalId = window.setInterval(() => {
      this.toggleScroll();
    }, 7000) as unknown as number;
  }

  private toggleScroll(): void {
    const scrollAmount = 1200 * (this.whichImgNow === 0 ? 1 : -1);

    this.scrollCarousel(scrollAmount);
    this.whichImgNow = this.whichImgNow === 0 ? 1 : 0;
  }

  private scrollCarousel(amount: number): void {
    this.containerCarouselCustom.nativeElement?.scrollBy({ left: amount, behavior: 'smooth' });
    this.updateArrowsVisibility();
  }

  private updateArrowsVisibility(): void {
    if (!this.containerCarouselCustom.nativeElement) return;

    const maxScrollLeft = this.containerCarouselCustom.nativeElement.scrollWidth - this.containerCarouselCustom.nativeElement.clientWidth;

    this.containerArrowLeft.nativeElement!.style.display = this.containerCarouselCustom.nativeElement.scrollLeft > 0 ? 'flex' : 'none';
    this.containerArrowRight.nativeElement!.style.display = this.containerCarouselCustom.nativeElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
  }

  private initCarousel(): void {
    const scrollElement = document.querySelector('.container-carousel-custom');
    const containerLeft: HTMLElement | null = document.querySelector('.container-arrow-left');
    const containerRight: HTMLElement | null = document.querySelector('.container-arrow-right');

    containerLeft?.addEventListener('click', () => this.scrollCarousel(-1200));
    containerRight?.addEventListener('click', () => this.scrollCarousel(1200));
    scrollElement?.addEventListener('scroll', () => this.updateArrowsVisibility());
    window.addEventListener('resize', () => this.updateArrowsVisibility());

    this.updateArrowsVisibility();
  }
}
