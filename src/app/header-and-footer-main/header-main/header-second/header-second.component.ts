import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.scss'
})
export class HeaderSecondComponent implements AfterViewInit {
  @ViewChild('ContainerModalAccount') ContainerModalAccount!: ElementRef<HTMLDivElement>;
  ShowModalAccount = false;

  ngAfterViewInit(): void {
    this.ContainerModalAccount.nativeElement.style.display = 'none';
  }

  onClickAccount(){
    console.log('Account clicked');
  }

  mouseEnterAccount(){
    this.ContainerModalAccount.nativeElement.style.display = 'flex';
  }

  mouseLeaveAccount(){
    this.ContainerModalAccount.nativeElement.style.display = 'none';
  }
}

// Quando entrar no modal ele tem que continuar ativo o "flex"

