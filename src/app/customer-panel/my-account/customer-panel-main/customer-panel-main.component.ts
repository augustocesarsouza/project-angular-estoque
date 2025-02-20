import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserService } from '../service/update-user.service';
import { WhereIsComingCustomerPanelAndRegisterUserService } from '../../../login-and-register-new-account/service/where-is-coming-customer-panel-and-register-user.service';
import { User } from '../../../interface-entity/user';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-customer-panel-main',
  templateUrl: './customer-panel-main.component.html',
  styleUrl: './customer-panel-main.component.scss'
})
export class CustomerPanelMainComponent implements OnInit, OnDestroy {
  user!: User;
  urlName = "";

  setTimeoutId!: number;

  constructor(private router: Router, private whereIsComingCustomerPanelAndRegisterUserService: WhereIsComingCustomerPanelAndRegisterUserService,
    private updateUserService: UpdateUserService
  ){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        this.user = user;
      }
    }

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/user/login']);
      return;
    };

    this.whereIsComingCustomerPanelAndRegisterUserService.urlName$.subscribe((urlName) => {
      if(urlName === "register"){
        this.urlName = urlName;

        this.setTimeoutId = setTimeout(() => {
          this.urlName = "a";
        }, 4000)as unknown as number;
      }
    });

    this.updateUserService.updateUser$.subscribe((userUpdate) => {
      if(userUpdate){
        this.user = userUpdate;
      }
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutId);
  }
}
