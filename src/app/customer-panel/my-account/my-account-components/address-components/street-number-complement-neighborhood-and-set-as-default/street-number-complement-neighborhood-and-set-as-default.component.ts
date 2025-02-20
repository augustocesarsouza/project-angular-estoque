import { Component, Input } from '@angular/core';
import { UserAddress } from '../../../../../interface-entity/user-address';

@Component({
  selector: 'app-street-number-complement-neighborhood-and-set-as-default',
  templateUrl: './street-number-complement-neighborhood-and-set-as-default.component.html',
  styleUrl: './street-number-complement-neighborhood-and-set-as-default.component.scss'
})
export class StreetNumberComplementNeighborhoodAndSetAsDefaultComponent {
  @Input() el!: UserAddress;
  @Input() onClickSetAsDefault!: (el: UserAddress) => void;

}
