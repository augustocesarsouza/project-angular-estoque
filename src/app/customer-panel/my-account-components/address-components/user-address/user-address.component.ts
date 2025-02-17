import { Component, OnInit } from '@angular/core';
import { AddressUserService } from '../../../../services-backend/address-user.service';
import { UserAddress } from '../../../../interface-entity/user-address';
import { UserLocalStorage } from '../../../../function-user/get-user-local-storage/user-local-storage';
import { User } from '../../../../interface-entity/user';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrl: './user-address.component.scss'
})
export class UserAddressComponent implements OnInit {
  // address: UserAddress[] = [];

  addressArray: UserAddress[] = [];

  addressToDelete!: UserAddress;
  showModalDeleteAddress = false;
  newAddress = false;

  addressEdit: UserAddress | null = null;
  user!: User;

  constructor(private addressUserService: AddressUserService){}

  ngOnInit(): void {
    this.changeValueNewAddress = this.changeValueNewAddress.bind(this);
    this.createNewAddress = this.createNewAddress.bind(this);
    this.updateArrayAddress = this.updateArrayAddress.bind(this);
    this.clickInEditAddress = this.clickInEditAddress.bind(this);
    this.updateArrayAddressDefault = this.updateArrayAddressDefault.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);

    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        this.user = user;

        this.addressUserService.GetAddressByUserId(user).subscribe({
          next: (success) => {
            const data = success.data;
            console.log(data);

            this.addressArray = data;
          },
          error: error => {
            if(error.status === 400){

              // this.confirmEmail = false;
            }

            if(error.status === 403){
              // this.googleApiService.logout();
              // localStorage.removeItem('user');
              // this.router.navigate(['/user/login']);
              // this.confirmEmail = false;
            }
          }
        });
      }
    }
  }

  changeValueNewAddress(newAddress: boolean): void{
    if(!newAddress){
      this.addressEdit = null;
    }

    this.newAddress = newAddress;
  }

  createNewAddress(newAddress: UserAddress): void{
    this.addressArray.push(newAddress);
  }

  updateArrayAddress(addressToUpdate: UserAddress){
    this.addressArray = this.addressArray
    .map(address => address.id === addressToUpdate.id ? addressToUpdate : address)
    .sort((a, b) => b.defaultAddress - a.defaultAddress)
  }

  onClickContainerInsertAddress = () => {
    this.newAddress = true;
  }

  clickInEditAddress(editAddress: UserAddress): void{
    this.addressEdit = editAddress;
  }

  updateArrayAddressDefault(addressDefault: UserAddress){
    this.addressArray = this.addressArray
    .map((address => {
      if(address.id === addressDefault.id){
        return addressDefault;
      } else {
        address.defaultAddress = 0;
        return address;
      }
    }))
    .sort((a, b) => b.defaultAddress - a.defaultAddress)
  }

  deleteAddress(addressToDelete: UserAddress){
    this.addressArray = this.addressArray.filter(address => address.id !== addressToDelete.id)
    .sort((a, b) => b.defaultAddress - a.defaultAddress)
  }
}
