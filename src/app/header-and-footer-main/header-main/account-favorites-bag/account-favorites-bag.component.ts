import {  AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { User } from '../../../interface-entity/user';
import { UserLocalStorage } from '../../../get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-account-favorites-bag',
  templateUrl: './account-favorites-bag.component.html',
  styleUrl: './account-favorites-bag.component.scss'
})
export class AccountFavoritesBagComponent implements OnDestroy, AfterViewInit, OnInit {
  @ViewChild('spanAccountHeader') spanAccountHeader!: ElementRef<HTMLSpanElement>;
  @ViewChild('ContainerModalAccount') ContainerModalAccount!: ElementRef<HTMLDivElement>;
  @ViewChild('ContainerModalBag') ContainerModalBag!: ElementRef<HTMLDivElement>;
  @ViewChild('spanBagHeader') spanBagHeader!: ElementRef<HTMLSpanElement>;

  @ViewChild('ContainerModalAccountLogIn') ContainerModalAccountLogIn!: ElementRef<HTMLDivElement>;

  user!: User;
  intervalId!: number;

  ngOnInit(): void {
    const userResult = UserLocalStorage();
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

  ngAfterViewInit(): void {
    if(!this.user){
      this.ContainerModalAccount.nativeElement.style.display = 'none';
    }else {
      this.ContainerModalAccountLogIn.nativeElement.style.display = 'none';
    }

    this.ContainerModalBag.nativeElement.style.display = 'none';
  }

  onClickAccount(){
    console.log('Account clicked');
  }

  mouseEnterAccount(){
    if(!this.user){
      this.ContainerModalAccount.nativeElement.style.display = 'flex';
    }else {
      this.ContainerModalAccountLogIn.nativeElement.style.display = 'flex';
    }

    this.spanAccountHeader.nativeElement.style.borderBottom = "1px solid black";
  }

  mouseLeaveAccount(){
    if(!this.user){
      this.ContainerModalAccount.nativeElement.style.display = 'none';
    }else {
      this.ContainerModalAccountLogIn.nativeElement.style.display = 'none';
    }

    this.spanAccountHeader.nativeElement.style.borderBottom = "none";
  }

  mouseEnterBag(){
    if(!this.user){
      this.ContainerModalAccount.nativeElement.style.display = 'none';
    }

    this.ContainerModalBag.nativeElement.style.display = 'flex';
    this.spanBagHeader.nativeElement.style.borderBottom = "1px solid black";
  }

  mouseLeaveBag(){
    this.ContainerModalBag.nativeElement.style.display = 'none';

    this.spanBagHeader.nativeElement.style.borderBottom = "none";
  }

  mouseEnterAccountLogIn(){
    if(this.user){
      this.ContainerModalAccountLogIn.nativeElement.style.display = 'flex';
    }

    this.spanAccountHeader.nativeElement.style.borderBottom = "1px solid black";
  }

  mouseLeaveAccountLogIn(){
    if(this.user){
      this.ContainerModalAccountLogIn.nativeElement.style.display = 'none';
    }

    this.spanAccountHeader.nativeElement.style.borderBottom = "none";
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }
}
