import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-microphone',
  templateUrl: './svg-microphone.component.html',
  styleUrl: './svg-microphone.component.scss'
})
export class SvgMicrophoneComponent {
  @Input() width = '17px';
  @Input() height = '17px';
  @Input() fill = 'white';
  // @Input() rotate = 'rotate(0)';
}
