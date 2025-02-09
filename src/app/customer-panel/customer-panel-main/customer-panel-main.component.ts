import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../get-user-local-storage/user-local-storage';
import { User } from '../../interface-entity/user';
import { WhereIsComingCustomerPanelAndRegisterUserService } from '../../login-and-register-new-account/service/where-is-coming-customer-panel-and-register-user.service';

@Component({
  selector: 'app-customer-panel-main',
  templateUrl: './customer-panel-main.component.html',
  styleUrl: './customer-panel-main.component.scss'
})
export class CustomerPanelMainComponent implements OnInit, OnDestroy {
  user!: User
  urlName = "";

  setTimeoutId!: number;

  constructor(private router: Router, private whereIsComingCustomerPanelAndRegisterUserService: WhereIsComingCustomerPanelAndRegisterUserService){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    this.whereIsComingCustomerPanelAndRegisterUserService.urlName$.subscribe((urlName) => {
      if(urlName === "register"){
        this.urlName = urlName;

        this.setTimeoutId = setTimeout(() => {
          this.urlName = "a";
        }, 1000)as unknown as number;
        // Na Pagina inicial quando passar o mouse na "Conta" se tiver usuario é para mostrar algo diferente quando eu passar o mouse falando que eu já loguei
      }
    });

    // if(userResult.isNullUserLocalStorage){
    //   localStorage.removeItem('user');
    //   this.router.navigate(['/user/login']);
    //   return;
    // };

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        this.user = user;
      }
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutId);
  }
}
