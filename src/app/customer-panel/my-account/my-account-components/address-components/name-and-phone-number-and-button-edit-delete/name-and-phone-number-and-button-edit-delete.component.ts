import { Component, Input } from '@angular/core';
import { UserAddress } from '../../../../../interface-entity/user-address';

@Component({
  selector: 'app-name-and-phone-number-and-button-edit-delete',
  templateUrl: './name-and-phone-number-and-button-edit-delete.component.html',
  styleUrl: './name-and-phone-number-and-button-edit-delete.component.scss'
})
export class NameAndPhoneNumberAndButtonEditDeleteComponent {
  @Input() el!: UserAddress;
  @Input() address!: UserAddress[];
  @Input() onClickEditAddress!: (editAddress: UserAddress) => void;
  @Input() onClickDeleteAddress!: (addressDefault: UserAddress) => void;
}
