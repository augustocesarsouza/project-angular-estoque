import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-register',
  templateUrl: './button-register.component.html',
  styleUrl: './button-register.component.scss'
})
export class ButtonRegisterComponent implements AfterViewInit {
  @ViewChild('buttonRegisterAccount') buttonRegisterAccount!: ElementRef<HTMLButtonElement>;

  @Input() onClickRegister!: () => void;
  @Input() getButtonRegisterAccount!: (button: HTMLButtonElement) => void;

  ngAfterViewInit(): void {
    this.getButtonRegisterAccount(this.buttonRegisterAccount.nativeElement);
  }
}
