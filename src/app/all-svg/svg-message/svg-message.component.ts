import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-message',
  templateUrl: './svg-message.component.html',
  styleUrl: './svg-message.component.scss'
})
export class SvgMessageComponent {
  @Input() width = '17px';
  @Input() height = '17px';
  @Input() fill = 'red';
}
