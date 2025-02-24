import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-browsing-rote',
  templateUrl: './browsing-rote.component.html',
  styleUrl: './browsing-rote.component.scss'
})
export class BrowsingRoteComponent implements AfterViewInit {
  @ViewChildren('allSpan') allSpan!: QueryList<ElementRef<HTMLSpanElement>>;
  spanTextNav = "";

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit(): void {
    const array = this.allSpan.toArray();

    const spanOne = array[0].nativeElement.textContent?.trim().toLowerCase();
    const spanTwo = array[1].nativeElement.textContent?.trim().toLowerCase();
    const spanThree = array[2].nativeElement.textContent?.trim().toLowerCase();

    this.spanTextNav = `${spanOne}.${spanTwo}.${spanThree}`;
    this.cdr.detectChanges();
  }
}
