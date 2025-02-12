import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateLastContainerInfoAboutMyAccountService } from '../../service/update-last-container-info-about-my-account.service';

@Component({
  selector: 'app-my-account-first-part-customer-panel',
  templateUrl: './my-account-first-part-customer-panel.component.html',
  styleUrl: './my-account-first-part-customer-panel.component.scss'
})
export class MyAccountFirstPartCustomerPanelComponent implements AfterViewInit, OnInit {
  @Input() updateWhichContainerWasClicked!: (clicked: string) => void;
  @Input() whichContainerWasClicked!: string;

  @ViewChild('containerMyAccount') containerMyAccount!: ElementRef<HTMLDivElement>;
  containerMyOrders!: HTMLDivElement;
  spanMyOrders!: HTMLDivElement;
  containerInfoAboutMyOrders!: HTMLDivElement;
  containerValePurchase!: HTMLDivElement;
  spanValePurchase!: HTMLSpanElement;

  @ViewChild('containerMyAccountSpan') containerMyAccountSpan!: ElementRef<HTMLDivElement>;
  @ViewChildren('containerMyAccountSubSection') containerMyAccountSubSection!: QueryList<ElementRef<HTMLDivElement>>;
  lastContainerInfoAboutMyAccount = -1;

  constructor(private router: Router,
    private updateLastContainerInfoAboutMyAccountService: UpdateLastContainerInfoAboutMyAccountService){}

    ngOnInit(): void {
      this.updateLastContainerInfoAboutMyAccountService.updateLastContainerNumber$.subscribe((containerNumber) => {
        if(containerNumber){
          console.log(containerNumber);

          this.lastContainerInfoAboutMyAccount = containerNumber;
        }
      });
    }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const containerMyOrders = document.querySelector(".container-my-orders") as HTMLDivElement;
    this.containerMyOrders = containerMyOrders;

    const spanMyOrders = document.querySelector(".span-my-orders") as HTMLDivElement;
    this.spanMyOrders = spanMyOrders;

    const containerInfoAboutMyOrders = document.querySelector(".container-info-about-my-orders") as HTMLDivElement;
    this.containerInfoAboutMyOrders = containerInfoAboutMyOrders;

    const containerValePurchase = document.querySelector(".container-vale-purchase") as HTMLDivElement;
    this.containerValePurchase = containerValePurchase;

    const spanValePurchase = document.querySelector(".span-vale-purchase") as HTMLSpanElement;
    this.spanValePurchase = spanValePurchase;
  }

  onClickMyAccount(){
    this.whichContainerWasClicked = "my-account";
    this.updateWhichContainerWasClicked("my-account");
    this.functionClickedMyAccount();

    if(this.lastContainerInfoAboutMyAccount > -1){
      const element = this.containerMyAccountSubSection.toArray()[this.lastContainerInfoAboutMyAccount].nativeElement;
      const firstChild = element.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    }

    this.lastContainerInfoAboutMyAccount = -1;
    this.router.navigate(['/painel-do-cliente']);
  }

  functionClickedMyAccount() {
    this.spanMyOrders.style.borderBottom = "none";
    this.containerMyAccount.nativeElement.style.borderLeft = "5px solid rgb(0, 0, 0)";
    this.containerMyOrders.style.borderLeft = "none";
    this.containerInfoAboutMyOrders.style.borderLeft = "none";
    this.containerValePurchase.style.borderLeft = "none";
    this.spanValePurchase.style.borderBottom = "none";
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

  onMouseEnterSpanSubSection(e: MouseEvent) {
    const targer = e.target as HTMLDivElement;
    const firstChild = targer.firstChild as HTMLSpanElement;
    firstChild.style.borderBottom = "1px solid rgb(0, 0, 0)";
  }

  onMouseLeaveSpanPersonalData(e: MouseEvent) {
    if(this.lastContainerInfoAboutMyAccount !== 0){
      const targer = e.target as HTMLDivElement;
      const firstChild = targer.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    }
  }

  onMouseLeaveSpanChangePassword(e: MouseEvent) {
    if(this.lastContainerInfoAboutMyAccount !== 1){
      const targer = e.target as HTMLDivElement;
      const firstChild = targer.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    }
  }

  onMouseLeaveSpanAddress(e: MouseEvent) {
    if(this.lastContainerInfoAboutMyAccount !== 2){
      const targer = e.target as HTMLDivElement;
      const firstChild = targer.firstChild as HTMLSpanElement;
      firstChild.style.borderBottom = "none";
    }
  }

  onClickSpanSubSection(i: number){
    this.updateWhichContainerWasClicked("a");
    this.functionClickedMyAccount();
    this.whichContainerWasClicked = "";
    this.lastContainerInfoAboutMyAccount = i;

    this.containerMyAccountSpan.nativeElement.style.borderBottom = "none";

    this.containerMyAccountSubSection.forEach((el, index) => {
      const firstChild = el.nativeElement.firstChild as HTMLSpanElement;

      if(index === i){
        firstChild.style.borderBottom = "1px solid rgb(0, 0, 0)";
        return;
      }

      firstChild.style.borderBottom = "none";
    });

    this.router.navigate(['/painel-do-cliente/dados-cadastrais']);
  }
}
