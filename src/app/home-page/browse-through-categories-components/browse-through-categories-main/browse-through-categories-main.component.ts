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
    const objCategory1 = {name: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740580063/imgs-backend-estoque/img-home-page/Blusas_dzss8y.webp", type: "blusas"};
    const objCategory2 = {name: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740580143/imgs-backend-estoque/img-home-page/acessorios_ahgrgh.webp", type: "acessorios"};
    const objCategory3 = {name: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740580208/imgs-backend-estoque/img-home-page/vestidos_sj137h.webp", type: "vestidos"};
    const objCategory4 = {name: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740580273/imgs-backend-estoque/img-home-page/casacos_ilo6iy.webp", type: "casacos"};
    const objCategory5 = {name: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740580349/imgs-backend-estoque/img-home-page/calcas_anfumi.webp", type: "calcas"};

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
