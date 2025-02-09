import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interface-entity/user';

@Component({
  selector: 'app-modal-account-log-in',
  templateUrl: './modal-account-log-in.component.html',
  styleUrl: './modal-account-log-in.component.scss'
})
export class ModalAccountLogInComponent {
  @Input() user!: User;

  constructor(private router: Router){}

  onClickMyAccount(){
    this.router.navigate(['/painel-do-cliente']);
  }

  onClickExitMyAccount(){
    localStorage.removeItem("user");
    this.router.navigate(['/user/login']);
  }
}
