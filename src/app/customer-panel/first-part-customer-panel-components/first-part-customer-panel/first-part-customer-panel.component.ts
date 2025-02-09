import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../interface-entity/user';
import { Router } from '@angular/router';

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
  containerMyAccount!: HTMLDivElement;
  containerMyAccountSpan!: HTMLDivElement;
  spanMyOrders!: HTMLSpanElement;

  nameUser = "Augusto";

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.updateWhichContainerWasClicked = this.updateWhichContainerWasClicked.bind(this);
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const containerMyAccount = document.querySelector(".container-my-account") as HTMLDivElement;
    this.containerMyAccount = containerMyAccount;

    const containerMyOrders = document.querySelector(".container-my-orders") as HTMLDivElement;
    this.containerMyOrders = containerMyOrders;

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
    this.containerValePurchase.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.containerMyAccountSpan.style.borderBottom = "none";
    this.spanMyOrders.style.borderBottom = "none";
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
    localStorage.removeItem("user");
    this.router.navigate(['/user/login']);
  }
}
