import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-minimize',
  templateUrl: './svg-minimize.component.html',
  styleUrl: './svg-minimize.component.scss'
})
export class SvgMinimizeComponent {
  @Input() width = '17px';
  @Input() height = '17px';
  @Input() fill = 'red';
}
