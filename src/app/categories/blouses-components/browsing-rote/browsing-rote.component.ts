import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCurrentUrlCategoriesService } from '../../service/update-current-url-categories.service';

@Component({
  selector: 'app-browsing-rote',
  templateUrl: './browsing-rote.component.html',
  styleUrl: './browsing-rote.component.scss'
})
export class BrowsingRoteComponent implements AfterViewInit, OnChanges {
  @ViewChildren('allSpan') allSpan!: QueryList<ElementRef<HTMLSpanElement>>;
  spanTextNav = "";

  @Input() onClickBrowsingRote!: (rote: string) => void;
  @Input() routeBrowsing!: string;
  quantityShow = 2;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private updateCurrentUrlCategoriesService: UpdateCurrentUrlCategoriesService){}

  ngAfterViewInit(): void {
    if(this.updateCurrentUrlCategoriesService.updateUrl$){
      this.updateCurrentUrlCategoriesService.updateUrl$.subscribe((data) => {
        if(data === "/feminino/roupas"){
          this.quantityShow = 1;
        } else if(data === "/feminino"){
          this.quantityShow = 0;
        } else {
          this.quantityShow = 2;
        }

        setTimeout(() => {
          let spanTextNavFor = "";
          const allSpanInnerBrowing = document.querySelectorAll(".span-inner-browsing") as NodeListOf<HTMLSpanElement>;

          for (let i = 0; i <= this.quantityShow; i++) {
            const element = allSpanInnerBrowing[i];

            spanTextNavFor += element.textContent?.trim().toLowerCase();

            if(i < this.quantityShow){
              spanTextNavFor += ".";
            }
          }

          const spanLastOne = allSpanInnerBrowing[allSpanInnerBrowing.length - 1].textContent?.trim().toUpperCase();
          console.log(spanLastOne);

          if(spanLastOne){
            this.routeBrowsing = spanLastOne;
          }

          this.spanTextNav = spanTextNavFor;
        }, 50);
      });
    }

    const currentUrl = this.router.url;

    if(currentUrl === "/feminino"){
      this.quantityShow = 0;
    }

    if(currentUrl === "/feminino/roupas"){
      this.quantityShow = 1;
    }

    let quantityShow = 0;

    if(this.routeBrowsing === "Blusa"){
      quantityShow = 2;
    }

    if(this.routeBrowsing === "Roupas"){
      quantityShow = 1;
    }

    let spanTextNavFor = "";
    const array = this.allSpan.toArray();

    for (let i = 0; i <= quantityShow; i++) {
      const element = array[i];

      spanTextNavFor += element.nativeElement.textContent?.trim().toLowerCase();

      if(i < quantityShow){
        spanTextNavFor += ".";
      }
    }

    this.spanTextNav = spanTextNavFor;

    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['routeBrowsing'] && !changes['routeBrowsing'].firstChange) {
      let quantityShow = 0;

      if(this.routeBrowsing === "Blusa"){
        quantityShow = 2;
      }

      if(this.routeBrowsing === "Roupas"){
        quantityShow = 1;
      }

      if(this.routeBrowsing === "Feminino"){
        quantityShow = 0;
      }

      let spanTextNavFor = "";
      const array = this.allSpan.toArray();
      this.quantityShow = quantityShow;

      for (let i = 0; i <= quantityShow; i++) {
        const element = array[i];

        spanTextNavFor += element.nativeElement.textContent?.trim().toLowerCase();

        if(i < quantityShow){
          spanTextNavFor += ".";
        }
      }

      this.spanTextNav = spanTextNavFor;
    }
  }
}
