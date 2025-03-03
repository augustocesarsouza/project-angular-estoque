import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-fontawesome',
  templateUrl: './svg-arrow-fontawesome.component.html',
  styleUrl: './svg-arrow-fontawesome.component.scss'
})
export class SvgArrowFontawesomeComponent {
  @Input() width = '20px';
  @Input() height = '20px';
  @Input() fill = 'white';
  @Input() rotate = 'rotate(0)';
}
