import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-account',
  templateUrl: './modal-account.component.html',
  styleUrl: './modal-account.component.scss'
})
export class ModalAccountComponent {

  constructor(private router: Router){}

  onClickEnterCreateAccount(){
    this.router.navigate(['/user/login']);
  }
}
