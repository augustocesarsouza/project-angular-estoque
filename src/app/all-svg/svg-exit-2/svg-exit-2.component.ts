import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-exit-2',
  templateUrl: './svg-exit-2.component.html',
  styleUrl: './svg-exit-2.component.scss'
})
export class SvgExit2Component {
  @Input() width = '17px';
  @Input() height = '17px';
  @Input() fill = 'red';
}
