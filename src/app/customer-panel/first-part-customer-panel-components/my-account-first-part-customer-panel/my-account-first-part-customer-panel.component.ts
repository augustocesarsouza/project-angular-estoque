import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account-first-part-customer-panel',
  templateUrl: './my-account-first-part-customer-panel.component.html',
  styleUrl: './my-account-first-part-customer-panel.component.scss'
})
export class MyAccountFirstPartCustomerPanelComponent implements AfterViewInit {
  @Input() updateWhichContainerWasClicked!: (clicked: string) => void;
  @Input() whichContainerWasClicked!: string;

  @ViewChild('containerMyAccount') containerMyAccount!: ElementRef<HTMLDivElement>;
  containerMyOrders!: HTMLDivElement;
  spanMyOrders!: HTMLDivElement;
  containerValePurchase!: HTMLDivElement;
  spanValePurchase!: HTMLSpanElement;

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const containerMyOrders = document.querySelector(".container-my-orders") as HTMLDivElement;
    this.containerMyOrders = containerMyOrders;

    const spanMyOrders = document.querySelector(".span-my-orders") as HTMLDivElement;
    this.spanMyOrders = spanMyOrders;

    const containerValePurchase = document.querySelector(".container-vale-purchase") as HTMLDivElement;
    this.containerValePurchase = containerValePurchase;

    const spanValePurchase = document.querySelector(".span-vale-purchase") as HTMLSpanElement;
    this.spanValePurchase = spanValePurchase;
  }

  onClickMyAccount(){
    this.updateWhichContainerWasClicked("my-account");
    this.spanMyOrders.style.borderBottom = "none";
    this.containerMyAccount.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.containerMyOrders.style.borderLeft = "none";
    this.containerValePurchase.style.borderLeft = "none";
    this.spanValePurchase.style.borderBottom = "none";

    this.router.navigate(['/painel-do-cliente']);
  }

  onMouseEnter(container: HTMLDivElement) {
    const targer = container as HTMLDivElement;
    targer.style.borderBottom = "1px solid rgb(0, 0, 0)";
  }

  onMouseLeave(container: HTMLDivElement) {
    if(this.whichContainerWasClicked !== "my-account") {
      const targer = container as HTMLDivElement;
      targer.style.borderBottom = "none";
    }
  }

  onClickRegistrationData(){
    this.router.navigate(['/painel-do-cliente/dados-cadastrais']);
  }
}
