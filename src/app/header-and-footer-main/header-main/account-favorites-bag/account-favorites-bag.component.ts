import {  AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account-favorites-bag',
  templateUrl: './account-favorites-bag.component.html',
  styleUrl: './account-favorites-bag.component.scss'
})
export class AccountFavoritesBagComponent implements OnDestroy, AfterViewInit {
  @ViewChild('spanAccountHeader') spanAccountHeader!: ElementRef<HTMLSpanElement>;
  @ViewChild('ContainerModalAccount') ContainerModalAccount!: ElementRef<HTMLDivElement>;
  @ViewChild('ContainerModalBag') ContainerModalBag!: ElementRef<HTMLDivElement>;
  @ViewChild('spanBagHeader') spanBagHeader!: ElementRef<HTMLSpanElement>;

  intervalId!: number;

  ngAfterViewInit(): void {
    this.ContainerModalAccount.nativeElement.style.display = 'none';
    this.ContainerModalBag.nativeElement.style.display = 'none';
  }

  onClickAccount(){
    console.log('Account clicked');
  }

  mouseEnterAccount(){
    this.ContainerModalAccount.nativeElement.style.display = 'flex';

    this.spanAccountHeader.nativeElement.style.borderBottom = "1px solid black";
  }

  mouseLeaveAccount(){
    this.ContainerModalAccount.nativeElement.style.display = 'none';

    this.spanAccountHeader.nativeElement.style.borderBottom = "none";
  }

  mouseEnterBag(){
    this.ContainerModalAccount.nativeElement.style.display = 'none';
    this.ContainerModalBag.nativeElement.style.display = 'flex';

    this.spanBagHeader.nativeElement.style.borderBottom = "1px solid black";
  }

  mouseLeaveBag(){
    this.ContainerModalBag.nativeElement.style.display = 'none';

    this.spanBagHeader.nativeElement.style.borderBottom = "none";
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }
}
