import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-type',
  templateUrl: './review-type.component.html',
  styleUrl: './review-type.component.scss'
})
export class ReviewTypeComponent implements OnInit {
  @Input() nameType!: string;
  countStarArray: number[] | null = null;
  emptyStars: unknown[] = [];

  ngOnInit(): void {
    const countStarArray = [];
    const starQuantity = 1;

    for (let i = 1; i <= starQuantity; i++) {
      countStarArray.push(i);
    }

    this.countStarArray = countStarArray;

    if(this.countStarArray){
      const maxStars = 5;
      this.emptyStars = Array.from({ length: maxStars - this.countStarArray.length });
    }
  }

  onClickStar(index: number){
    if(this.countStarArray === null) return;
    const starQuantityActual = index;

    const countStarArray: number[] = [];

    for (let i = 1; i <= starQuantityActual; i++) {
      countStarArray.push(i);
    }

    this.countStarArray = countStarArray;

    if(countStarArray){
      const maxStars = 5;
      this.emptyStars = Array.from({ length: maxStars - countStarArray.length });
    }
  }

  onClickStarBlack(index: number){
    if(this.countStarArray === null) return;
    const starQuantityActual = index + 1 + this.countStarArray.length;

    const countStarArray: number[] = [];

    for (let i = 1; i <= starQuantityActual; i++) {
      countStarArray.push(i);
    }

    this.countStarArray = countStarArray;

    if(countStarArray){
      const maxStars = 5;
      this.emptyStars = Array.from({ length: maxStars - countStarArray.length });
    }
  }
}
