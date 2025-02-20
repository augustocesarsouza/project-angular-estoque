import { Component, Input, OnInit } from '@angular/core';
import { UserAddress } from '../../../../../interface-entity/user-address';
import { AddressUserService } from '../../../../../services-backend/address-user.service';
import { Router } from '@angular/router';
import { User } from '../../../../../interface-entity/user';

@Component({
  selector: 'app-view-address-user',
  templateUrl: './view-address-user.component.html',
  styleUrl: './view-address-user.component.scss'
})
export class ViewAddressUserComponent implements OnInit {
  @Input() address!: UserAddress[];
  @Input() clickInEditAddress!: (editAddress: UserAddress) => void;
  @Input() updateArrayAddressDefault!: (addressDefault: UserAddress) => void;
  @Input() deleteAddress!: (addressDefault: UserAddress) => void;
  @Input() user!: User;

  addressToDelete!: UserAddress;
  showModalDeleteAddress = false;

  estadosBrasil: Record<string, string> = {
      AC: "Acre",
      AL: "Alagoas",
      AP: "Amapá",
      AM: "Amazonas",
      BA: "Bahia",
      CE: "Ceará",
      DF: "Distrito Federal",
      ES: "Espírito Santo",
      GO: "Goiás",
      MA: "Maranhão",
      MT: "Mato Grosso",
      MS: "Mato Grosso do Sul",
      MG: "Minas Gerais",
      PA: "Pará",
      PB: "Paraíba",
      PR: "Paraná",
      PE: "Pernambuco",
      PI: "Piauí",
      RJ: "Rio de Janeiro",
      RN: "Rio Grande do Norte",
      RS: "Rio Grande do Sul",
      RO: "Rondônia",
      RR: "Roraima",
      SC: "Santa Catarina",
      SP: "São Paulo",
      SE: "Sergipe",
      TO: "Tocantins"
    };

  constructor(private router: Router, private addressUserService: AddressUserService){}

  ngOnInit(): void {
    this.onClickEditAddress = this.onClickEditAddress.bind(this);
    this.onClickDeleteAddress = this.onClickDeleteAddress.bind(this);
    this.onClickSetAsDefault = this.onClickSetAsDefault.bind(this);
  }

  onClickEditAddress(el: UserAddress){
    this.clickInEditAddress(el);
  }

  onClickDeleteAddress(el: UserAddress){
    this.showModalDeleteAddress = true;
    this.addressToDelete = el;
  }

  onClickSetAsDefault(el: UserAddress){
    console.log(el);

    const addressUpdateDefault = {
      id: el.id,
      defaultAddress: 1
    }

    this.addressUserService.updateAddressDefault(addressUpdateDefault, this.user).subscribe({
      // FAZER O BACKEND E TESTAR "updateAddressDefault" "deleteAddress" todos os jeitos tem que testar
      next: (success) => {
        const address = success.data;

        this.updateArrayAddressDefault(address);
      },
      error: error => {
        if(error.status === 400){
          console.log(error);
        }

        if(error.status === 403){
          localStorage.removeItem('user');
          this.router.navigate(['/buyer/login']);
        }
      }
    });
  }

  onClickCancelDeleteAddress(){
    this.showModalDeleteAddress = false;
  }

  onClickDeleteAddressModal(){
    this.addressUserService.deleteAddress(this.addressToDelete.id, this.user).subscribe({
      next: (success) => {
        const address = success.data;

        this.deleteAddress(address);
        this.showModalDeleteAddress = false;
      },
      error: error => {
        if(error.status === 400){
          console.log(error);
          // this.confirmEmail = false;
        }

        if(error.status === 403){
          localStorage.removeItem('user');
          this.router.navigate(['/buyer/login']);
          // this.confirmEmail = false;
        }
      }
    });
  }

  getSiglaState = (sigla: string): string => {
    return this.estadosBrasil[sigla];
  }
}
