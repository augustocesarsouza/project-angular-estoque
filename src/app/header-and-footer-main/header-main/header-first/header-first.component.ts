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

  constructor(private ngZone: NgZone){}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => this.startRotation());
  }

  startRotation(): void {
    if(typeof window === 'undefined')return;

    const container = this.containerAllSpans.nativeElement as HTMLElement;
    if (!container) return;

    this.intervalId = window.setInterval(() => {
      const firstSpan = container.firstElementChild as HTMLElement;

      container.style.transition = "transform 1s ease-in-out";
      container.style.transform = "translateX(-560px)";

      setTimeout(() => {
        container.appendChild(firstSpan); // Move o primeiro para o final
        container.style.transition = "none"; // Remove transição para resetar posição
        container.style.transform = "translateX(0)"; // Reseta posição
      }, 1000);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }
}
