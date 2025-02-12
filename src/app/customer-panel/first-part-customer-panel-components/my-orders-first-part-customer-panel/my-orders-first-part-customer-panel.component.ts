import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UpdateLastContainerInfoAboutMyAccountService } from '../../service/update-last-container-info-about-my-account.service';

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
  @ViewChild('containerInfoAboutMyOrders') containerInfoAboutMyOrders!: ElementRef<HTMLDivElement>;
  @ViewChild('spanRequestedExchangesAndReturns') spanRequestedExchangesAndReturns!: ElementRef<HTMLSpanElement>;

  containerMyAccount!: HTMLDivElement;
  containerMyAccountSpan!: HTMLDivElement;
  containerValePurchase!: HTMLDivElement;
  spanValePurchase!: HTMLSpanElement;

  constructor(private updateLastContainerInfoAboutMyAccountService: UpdateLastContainerInfoAboutMyAccountService){}

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
    this.whichContainerWasClicked = "my-orders";
    this.updateWhichContainerWasClicked("my-orders");
    this.containerMyAccount.style.borderLeft = "none";
    this.containerMyAccountSpan.style.borderBottom = "none";

    this.containerMyOrders.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.spanMyOrders.nativeElement.style.borderBottom = "1px solid rgb(0, 0, 0)";

    this.containerInfoAboutMyOrders.nativeElement.style.borderLeft = "none";
    this.spanRequestedExchangesAndReturns.nativeElement.style.borderBottom = "none";

    this.containerValePurchase.style.borderLeft = "none";
    this.spanValePurchase.style.borderBottom = "none";

    const containerMyAccountSubSection = document.querySelectorAll(".container-my-account-sub-section") as NodeListOf<HTMLDivElement>;
    containerMyAccountSubSection.forEach(element => {
      const firstChild = element.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    });

    this.updateLastContainerInfoAboutMyAccountService.updateupdateContainerNumber(-1);
  }

  onClickRequestedExchangesAndReturns(){
    this.whichContainerWasClicked = "requested-exchanges";
    this.updateWhichContainerWasClicked("requested-exchanges");

    this.containerMyAccount.style.borderLeft = "none";
    this.containerMyAccountSpan.style.borderBottom = "none";

    this.containerMyOrders.nativeElement.style.borderLeft = "none";
    this.spanMyOrders.nativeElement.style.borderBottom = "none";

    this.containerInfoAboutMyOrders.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.spanRequestedExchangesAndReturns.nativeElement.style.borderBottom = "1px solid rgb(0, 0, 0)";

    this.containerValePurchase.style.borderLeft = "none";
    this.spanValePurchase.style.borderBottom = "none";

    const containerMyAccountSubSection = document.querySelectorAll(".container-my-account-sub-section") as NodeListOf<HTMLDivElement>;
    containerMyAccountSubSection.forEach(element => {
      const firstChild = element.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    });

    this.updateLastContainerInfoAboutMyAccountService.updateupdateContainerNumber(-1);
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

  onMouseLeaveRequestedExchangesAndReturns(span: HTMLSpanElement) {
    if(this.whichContainerWasClicked !== "requested-exchanges") {
      const targer = span as HTMLSpanElement;
      targer.style.borderBottom = "none";
    }
  }
}
