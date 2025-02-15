import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../function-user/get-user-local-storage/user-local-storage';
import { VerifyTokenIsExpired } from '../../function-user/function-token-user/verify-token-is-expired';
import { GoogleApiService } from '../../login-and-register-new-account/service/google-api.service';
// import { decodeJwt, JWTPayload } from 'jose';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit {

  constructor(private router: Router, private googleApiService: GoogleApiService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        const token = user.token;

        if(token){
          const tokenIsExpired = VerifyTokenIsExpired(token);

          if(tokenIsExpired){
            localStorage.removeItem('user');
            this.router.navigate(['/']);
            return;
          }
        }
      }
    }

    // CONTINUAR painel-do-cliente

    if(userResult.isNullUserLocalStorage){
      this.googleApiService.logout();
      localStorage.removeItem('user');
      this.router.navigate(['/']);
      return;
    };
  }
}
