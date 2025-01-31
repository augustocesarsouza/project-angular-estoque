import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-loupe',
  templateUrl: './svg-loupe.component.html',
  styleUrl: './svg-loupe.component.scss'
})
export class SvgLoupeComponent {
  @Input() width = '17px';
  @Input() height = '17px';
  @Input() fill = 'white';
}
