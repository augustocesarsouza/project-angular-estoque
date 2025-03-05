import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interface-entity/item';

@Component({
  selector: 'app-reviews-main',
  templateUrl: './reviews-main.component.html',
  styleUrl: './reviews-main.component.scss'
})
export class ReviewsMainComponent implements OnInit {
  @Input() item!: Item;
  @Input() getCreatedNewReviewItem!: (value: boolean) => void;
  itWasClickedReviews = false;

  ngOnInit(): void {
    this.changeValueModalReviews = this.changeValueModalReviews.bind(this);
  }

  onClickReviews(){
    this.itWasClickedReviews = true;
  }

  changeValueModalReviews(value: boolean){
    if(!value){
      if (typeof window === "undefined" || typeof document === "undefined")return;

      document.body.style.overflow = "auto";
    }

    this.itWasClickedReviews = value;
  }
}
