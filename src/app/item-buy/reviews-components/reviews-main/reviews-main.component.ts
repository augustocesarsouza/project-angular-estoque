import { Component, Input } from '@angular/core';
import { Item } from '../../../interface-entity/item';

@Component({
  selector: 'app-reviews-main',
  templateUrl: './reviews-main.component.html',
  styleUrl: './reviews-main.component.scss'
})
export class ReviewsMainComponent {
  @Input() item!: Item;


  onClickReviews(){
    //reviews
  }
}
