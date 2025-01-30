import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-exit',
  templateUrl: './svg-exit.component.html',
  styleUrl: './svg-exit.component.scss',
})
export class SvgExitComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
}
