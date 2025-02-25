import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-column-main',
  templateUrl: './quantity-column-main.component.html',
  styleUrl: './quantity-column-main.component.scss'
})
export class QuantityColumnMainComponent {
  @Input() onClickColumnFirst!: () => void;
  @Input() onClickColumnSecond!: () => void;
}
