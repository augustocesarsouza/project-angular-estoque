import { Component, ElementRef, NgZone, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  name: string;
  type: string;
}

@Component({
  selector: 'app-browse-through-categories-main',
  templateUrl: './browse-through-categories-main.component.html',
  styleUrl: './browse-through-categories-main.component.scss'
})
export class BrowseThroughCategoriesMainComponent implements OnInit, AfterViewInit {
  @ViewChild('containerCarouselCustom') containerCarouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  allImgsCategories: Category[] = [];

  constructor(private router: Router, private ngZone: NgZone){}

  ngOnInit(): void {
    const objCategory1 = {name: "https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/42/42_banner638730496910630227.webp", type: "blusas"};
    const objCategory2 = {name: "https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/43/43_banner638730497014289733.webp", type: "acessorios"};
    const objCategory3 = {name: "https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/45/45_banner638757262555236067.webp", type: "vestidos"};
    const objCategory4 = {name: "https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/46/46_banner638730497274514403.webp", type: "casacos"};
    const objCategory5 = {name: "https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/44/44_banner638730497103213645.webp", type: "calcas"};

    this.allImgsCategories.push(objCategory1, objCategory2, objCategory3, objCategory4, objCategory5);
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => this.initCarousel());
  }

  private scrollCarousel(amount: number): void {
    if(this.containerCarouselCustom && this.containerCarouselCustom.nativeElement){
      this.containerCarouselCustom.nativeElement.scrollBy({ left: amount, behavior: 'smooth' });
      this.updateArrowsVisibility();
    }
  }

  private updateArrowsVisibility(): void {
    if (!this.containerCarouselCustom.nativeElement) return;

    const maxScrollLeft = this.containerCarouselCustom.nativeElement.scrollWidth - this.containerCarouselCustom.nativeElement.clientWidth;

    this.containerArrowLeft.nativeElement!.style.display = this.containerCarouselCustom.nativeElement.scrollLeft > 0 ? 'flex' : 'none';
    this.containerArrowRight.nativeElement!.style.display = this.containerCarouselCustom.nativeElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
  }

  private initCarousel(): void {
    if(this.containerArrowLeft.nativeElement && this.containerArrowRight.nativeElement && this.containerCarouselCustom.nativeElement){
      this.containerArrowLeft.nativeElement.addEventListener('click', () => this.scrollCarousel(-230));
      this.containerArrowRight.nativeElement.addEventListener('click', () => this.scrollCarousel(230));
      this.containerCarouselCustom.nativeElement.addEventListener('scroll', () => this.updateArrowsVisibility());
      window.addEventListener('resize', () => this.updateArrowsVisibility());

      this.updateArrowsVisibility();
    }
  }

  onClickImg(item: Category){
    if(item.type === "blusas"){
      // feminino/roupas/blusa
      this.router.navigate(['feminino/roupas/blusa']);
    }
  }
}
