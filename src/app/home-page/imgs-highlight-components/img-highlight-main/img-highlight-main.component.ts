import { Component, NgZone, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ImgHighlightService } from '../../../services-backend/img-highlight.service';
import { User } from '../../../interface-entity/user';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { ImgHighlight } from '../../../interface-entity/img-highlight';

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

  imgsHighlight: ImgHighlight[] = [];
  user!: User;

  constructor(private imgHighlightService: ImgHighlightService, private router: Router, private ngZone: NgZone){}

  whichImgNow = 0;

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        this.user = user;

        this.imgHighlightService.GetAllImgHighlights(user).subscribe({
          next: (success) => {
            const listImgHighlight = success.data;
            console.log(success.data);


            this.imgsHighlight = listImgHighlight;
          },
          error: error => {
            if(error.status === 400){
              console.log(error);
            }

            if(error.status === 403){
              localStorage.removeItem('user');
              this.router.navigate(['/buyer/login']);
            }
          }
        });
      }
    }

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/user/login']);
      return;
    };
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
    if(this.containerCarouselCustom && this.containerCarouselCustom.nativeElement){
      let maxScrollLeft = this.containerCarouselCustom.nativeElement.scrollWidth - this.containerCarouselCustom.nativeElement.clientWidth;
      if(maxScrollLeft === 0){
        maxScrollLeft = 1;
      }

      this.containerArrowLeft.nativeElement!.style.display = this.containerCarouselCustom.nativeElement.scrollLeft > 0 ? 'flex' : 'none';
    this.containerArrowRight.nativeElement!.style.display = this.containerCarouselCustom.nativeElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
    }
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

  onClickArrowRightAndLeft(){
    clearInterval(this.intervalId); // Corrigido para clearInterval
    this.startToggleScroll(); // Reinicia o setInterval
  }
}
