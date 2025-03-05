import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-types-reviews',
  templateUrl: './all-types-reviews.component.html',
  styleUrl: './all-types-reviews.component.scss'
})
export class AllTypesReviewsComponent {
  @Input() getQuantityReview!: (whichNameReview: string, quantityStar: number) => void;

}
