import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-is-wrong-x',
  templateUrl: './code-is-wrong-x.component.html',
  styleUrl: './code-is-wrong-x.component.scss'
})
export class CodeIsWrongXComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'red';
}
