import { Component, Input } from '@angular/core';
import { Item } from '../../../../interface-entity/item';

@Component({
  selector: 'app-blouse-info-main',
  templateUrl: './blouse-info-main.component.html',
  styleUrl: './blouse-info-main.component.scss'
})
export class BlouseInfoMainComponent {
  @Input() itemList!: Item[];
}
