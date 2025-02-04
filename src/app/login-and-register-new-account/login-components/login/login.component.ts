import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('inputTypePassword') inputTypePassword!: ElementRef<HTMLInputElement>;
  showEyeOpen = false;

  onClickEyeOpen() {
    this.showEyeOpen = !this.showEyeOpen;

    this.inputTypePassword.nativeElement.type = "password";
  }

  onClickEyeClose() {
    this.showEyeOpen = !this.showEyeOpen;

    this.inputTypePassword.nativeElement.type = "text";
  }
}
