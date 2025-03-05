import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-type',
  templateUrl: './review-type.component.html',
  styleUrl: './review-type.component.scss'
})
export class ReviewTypeComponent implements OnInit {
  @Input() nameType!: string;
  @Input() getQuantityReview!: (whichNameReview: string, quantityStar: number) => void;
  countStarArray: number[] | null = null;
  emptyStars: unknown[] = [];

  ngOnInit(): void {
    const countStarArray = [];
    const starQuantity = 0;

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

    this.getQuantityReview(this.nameType, index);

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
    this.getQuantityReview(this.nameType, starQuantityActual);

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
