import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interface-entity/user';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { WhichUrlWasClickedCustomerPanelService } from '../../../customer-panel/my-account/service/which-url-was-clicked-customer-panel.service';

@Component({
  selector: 'app-modal-account-log-in',
  templateUrl: './modal-account-log-in.component.html',
  styleUrl: './modal-account-log-in.component.scss'
})
export class ModalAccountLogInComponent {
  @Input() user!: User;

  constructor(private router: Router,
    private googleApiService: GoogleApiService,
    private whichUrlWasClickedCustomerPanelService: WhichUrlWasClickedCustomerPanelService
  ){
  }


  onClickMyAccount(){
    this.router.navigate(['/painel-do-cliente']);
    this.whichUrlWasClickedCustomerPanelService.updateWhichUrl("/painel-do-cliente");
  }

  onClickMyOrders(){
    this.router.navigate(['/painel-do-cliente/pedidos']);
    this.whichUrlWasClickedCustomerPanelService.updateWhichUrl("/painel-do-cliente/pedidos");
  }

  onClickExitMyAccount(){
    localStorage.removeItem("user");
    localStorage.removeItem("userLogged");
    this.googleApiService.logout();
    this.router.navigate(['/user/login']);
  }
}
