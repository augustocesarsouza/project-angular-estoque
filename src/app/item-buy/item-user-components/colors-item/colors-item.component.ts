import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colors-item',
  templateUrl: './colors-item.component.html',
  styleUrl: './colors-item.component.scss'
})
export class ColorsItemComponent {
  @Input() colorsItem!: string[];
}
