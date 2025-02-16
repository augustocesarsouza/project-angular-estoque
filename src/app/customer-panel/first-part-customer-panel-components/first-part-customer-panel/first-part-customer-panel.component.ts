import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../interface-entity/user';
import { Router } from '@angular/router';
import { UpdateLastContainerInfoAboutMyAccountService } from '../../service/update-last-container-info-about-my-account.service';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { UpdateUserService } from '../../service/update-user.service';

@Component({
  selector: 'app-first-part-customer-panel',
  templateUrl: './first-part-customer-panel.component.html',
  styleUrl: './first-part-customer-panel.component.scss'
})
export class FirstPartCustomerPanelComponent implements OnInit, AfterViewInit {
  @Input() user!: User;

  @ViewChild('containerValePurchase') containerValePurchase!: ElementRef<HTMLDivElement>;
  whichContainerWasClicked = "my-account";

  containerMyOrders!: HTMLDivElement;
  containerInfoAboutMyOrders!: HTMLDivElement;
  containerMyAccount!: HTMLDivElement;
  containerMyAccountSpan!: HTMLDivElement;
  spanRequestedExchangesAndReturns!: HTMLSpanElement;
  spanMyOrders!: HTMLSpanElement;

  nameUser = "";

  constructor(private router: Router, private updateLastContainerInfoAboutMyAccountService: UpdateLastContainerInfoAboutMyAccountService,
    private googleApiService: GoogleApiService, private updateUserService: UpdateUserService
  ){
  }

  ngOnInit(): void {
    this.updateWhichContainerWasClicked = this.updateWhichContainerWasClicked.bind(this);

    this.nameUser = this.user.name;

    this.updateUserService.updateUser$.subscribe((user) => {
      if(user){
        this.nameUser = user.name;
      }
    });
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const containerMyAccount = document.querySelector(".container-my-account") as HTMLDivElement;
    this.containerMyAccount = containerMyAccount;

    const containerMyOrders = document.querySelector(".container-my-orders") as HTMLDivElement;
    this.containerMyOrders = containerMyOrders;

    const containerInfoAboutMyOrders = document.querySelector(".container-info-about-my-orders") as HTMLDivElement;
    this.containerInfoAboutMyOrders = containerInfoAboutMyOrders;

    const spanRequestedExchangesAndReturns = document.querySelector(".span-requested-exchanges-and-returns") as HTMLSpanElement;
    this.spanRequestedExchangesAndReturns = spanRequestedExchangesAndReturns;

    const containerMyAccountSpan = document.querySelector(".container-my-account-span") as HTMLDivElement;
    this.containerMyAccountSpan = containerMyAccountSpan;

    const spanMyOrders = document.querySelector(".span-my-orders") as HTMLSpanElement;
    this.spanMyOrders = spanMyOrders;
  }

  updateWhichContainerWasClicked (clicked: string) {
    this.whichContainerWasClicked = clicked;
  }

  onClickContainerValePurchase(){
    this.updateWhichContainerWasClicked("vale-purchase");
    this.containerMyOrders.style.borderLeft = "none";
    this.containerMyAccount.style.borderLeft = "none";
    this.containerInfoAboutMyOrders.style.borderLeft = "none";
    this.spanRequestedExchangesAndReturns.style.borderBottom = "none";
    this.containerValePurchase.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.containerMyAccountSpan.style.borderBottom = "none";
    this.spanMyOrders.style.borderBottom = "none";

    const containerMyAccountSubSection = document.querySelectorAll(".container-my-account-sub-section") as NodeListOf<HTMLDivElement>;
    containerMyAccountSubSection.forEach(element => {
      const firstChild = element.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    });

    this.updateLastContainerInfoAboutMyAccountService.updateupdateContainerNumber(-1);
  }

  onMouseEnter(spanValePurchase: HTMLSpanElement) {
    const targer = spanValePurchase as HTMLSpanElement;
    targer.style.borderBottom = "1px solid rgb(0, 0, 0)";
  }

  onMouseLeave(spanValePurchase: HTMLSpanElement) {
    if(this.whichContainerWasClicked !== "vale-purchase") {
      const targer = spanValePurchase as HTMLSpanElement;
      targer.style.borderBottom = "none";
    }
  }

  onClickLogOut(){
    this.googleApiService.logout();
    localStorage.removeItem("user");
    localStorage.removeItem("userLogged");
    this.router.navigate(['/user/login']);
  }
}
