import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-blouses',
  templateUrl: './svg-arrow-blouses.component.html',
  styleUrl: './svg-arrow-blouses.component.scss'
})
export class SvgArrowBlousesComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'rgb(112, 112, 112)';
  @Input() rotate = '0';
}
