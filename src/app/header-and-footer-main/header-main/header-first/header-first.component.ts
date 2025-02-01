import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header-first',
  templateUrl: './header-first.component.html',
  styleUrl: './header-first.component.scss'
})
export class HeaderFirstComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('spansAdShowUser') spansAdShowUser!: QueryList<ElementRef<HTMLSpanElement>>;
  @ViewChild('containerAllSpans') containerAllSpans!: ElementRef<HTMLDivElement>;

  whichSpanShow = 0;
  intervalId!: number;
  setTimeoutId!: number;

  constructor(private ngZone: NgZone){}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => this.startRotation());
  }

  startRotation(): void {
    if(typeof window === 'undefined')return;

    const container = this.containerAllSpans.nativeElement as HTMLElement;
    if (!container) return;

    clearTimeout(this.intervalId);
    this.intervalId = window.setInterval(() => {
      const firstSpan = container.firstElementChild as HTMLElement;

      container.style.transition = "transform 1s ease";
      container.style.transform = "translateX(-560px)";

      clearTimeout(this.setTimeoutId);
      this.setTimeoutId = setTimeout(() => {
        container.appendChild(firstSpan);
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
      }, 1000) as unknown as number;
    }, 2000)as unknown as number;
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }
}
