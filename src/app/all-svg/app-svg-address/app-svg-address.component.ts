import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-address',
  templateUrl: './app-svg-address.component.html',
  styleUrl: './app-svg-address.component.scss'
})
export class AppSvgAddressComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'orange';
}
