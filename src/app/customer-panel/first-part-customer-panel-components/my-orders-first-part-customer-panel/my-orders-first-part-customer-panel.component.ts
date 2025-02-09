import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-orders-first-part-customer-panel',
  templateUrl: './my-orders-first-part-customer-panel.component.html',
  styleUrl: './my-orders-first-part-customer-panel.component.scss'
})
export class MyOrdersFirstPartCustomerPanelComponent implements AfterViewInit {
  @Input() updateWhichContainerWasClicked!: (clicked: string) => void;
  @Input() whichContainerWasClicked!: string;

  @ViewChild('containerMyOrders') containerMyOrders!: ElementRef<HTMLDivElement>;
  @ViewChild('spanMyOrders') spanMyOrders!: ElementRef<HTMLSpanElement>;
  containerMyAccount!: HTMLDivElement;
  containerMyAccountSpan!: HTMLDivElement;
  containerValePurchase!: HTMLDivElement;
  spanValePurchase!: HTMLSpanElement;

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const containerMyAccount = document.querySelector(".container-my-account") as HTMLDivElement;
    this.containerMyAccount = containerMyAccount;

    const containerMyAccountSpan = document.querySelector(".container-my-account-span") as HTMLDivElement;
    this.containerMyAccountSpan = containerMyAccountSpan;

    const containerValePurchase = document.querySelector(".container-vale-purchase") as HTMLDivElement;
    this.containerValePurchase = containerValePurchase;

    const spanValePurchase = document.querySelector(".span-vale-purchase") as HTMLSpanElement;
    this.spanValePurchase = spanValePurchase;
  }

  onClickMyOrders(){
    this.updateWhichContainerWasClicked("my-orders");
    this.containerMyAccount.style.borderLeft = "none";
    this.containerMyAccountSpan.style.borderBottom = "none";
    this.spanMyOrders.nativeElement.style.borderBottom = "1px solid rgb(0, 0, 0)";
    this.containerMyOrders.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.containerValePurchase.style.borderLeft = "none";
    this.spanValePurchase.style.borderBottom = "none";
  }

  onMouseEnter(span: HTMLSpanElement) {
    const targer = span as HTMLSpanElement;
    targer.style.borderBottom = "1px solid rgb(0, 0, 0)";
  }

  onMouseLeave(span: HTMLSpanElement) {
    if(this.whichContainerWasClicked !== "my-orders") {
      const targer = span as HTMLSpanElement;
      targer.style.borderBottom = "none";
    }
  }
}
