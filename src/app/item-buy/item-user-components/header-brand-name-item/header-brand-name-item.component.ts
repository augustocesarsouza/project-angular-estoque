import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-brand-name-item',
  templateUrl: './header-brand-name-item.component.html',
  styleUrl: './header-brand-name-item.component.scss'
})
export class HeaderBrandNameItemComponent {
  @Input() brand!: string;
  @Input() itemName!: string;
}
