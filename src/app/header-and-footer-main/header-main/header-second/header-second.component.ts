import {  Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { User } from '../../../interface-entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.scss'
})
export class HeaderSecondComponent implements OnInit, OnDestroy {
  ShowModalAccount = false;
  alreadyVefifyIfUserIsRegistered = false;
  user!: User;
  setTimeoutId!: number;

  constructor(private router: Router, private googleApiService: GoogleApiService) {
  }

  ngOnInit(): void {
    if(this.googleApiService.userProfile$){
      this.googleApiService.userProfile$.subscribe((user) => {
        if(user){
          this.user = user;
        }
      });
    }
    // "this.googleApiService.logout();" esse metodo apaga o usuario meio que deleta igua lse você clicar em "Sair e o usuario logou com google
    // usar esse metodo de cima para deletar e nao ter historico dele
  }

  onClickRedirectUserHome(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutId);
  }
}

