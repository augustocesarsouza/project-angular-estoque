import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-google',
  templateUrl: './svg-google.component.html',
  styleUrl: './svg-google.component.scss'
})
export class SvgGoogleComponent {
  @Input() width = '17px';
  @Input() height = '17px';
  @Input() fill = 'white';
}
