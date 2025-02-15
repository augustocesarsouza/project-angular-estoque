import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interface-entity/user';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';

@Component({
  selector: 'app-modal-account-log-in',
  templateUrl: './modal-account-log-in.component.html',
  styleUrl: './modal-account-log-in.component.scss'
})
export class ModalAccountLogInComponent {
  @Input() user!: User;

  constructor(private router: Router, private googleApiService: GoogleApiService
  ){
  }


  onClickMyAccount(){
    this.router.navigate(['/painel-do-cliente']);
  }

  onClickExitMyAccount(){
    localStorage.removeItem("user");
    this.googleApiService.logout();
    this.router.navigate(['/user/login']);
  }
}
