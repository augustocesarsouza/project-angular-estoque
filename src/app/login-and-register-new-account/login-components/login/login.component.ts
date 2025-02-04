import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgEyeOpenComponent } from '../../../all-svg/svg-eye-open/svg-eye-open.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('inputTypePassword') inputTypePassword!: ElementRef<HTMLInputElement>;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('spanEmailErrorIsEmpty') spanEmailErrorIsEmpty!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanPasswordErrorIsEmpty') spanPasswordErrorIsEmpty!: ElementRef<HTMLSpanElement>;
  @ViewChild('appSvgEyeOpen') appSvgEyeOpen!: ElementRef<SvgEyeOpenComponent>;
  showEyeOpen = false;
  emailAndPasswordIsAllRight = false;
  colorSvgEye = "black";

  onClickEnterInput() {
    const countLengthEmail = this.inputEmail.nativeElement.value.length;
    const countLengthPassword = this.inputTypePassword.nativeElement.value.length;

    const inputEmail = this.inputEmail.nativeElement;
    const spanEmailError = this.spanEmailErrorIsEmpty.nativeElement;
    const inputTypePassword = this.inputTypePassword.nativeElement;
    const spanPasswordError = this.spanPasswordErrorIsEmpty.nativeElement;

    if(countLengthEmail <= 0){
      inputEmail.style.border = "1px solid red";
      spanEmailError.style.display = "block";
      this.colorSvgEye = "red";
      this.emailAndPasswordIsAllRight = false;
    }

    if(countLengthPassword <= 0){
      inputTypePassword.style.border = "1px solid red";
      spanPasswordError.style.display = "block";
      this.colorSvgEye = "red";
      this.emailAndPasswordIsAllRight = false;
    }else {
      spanPasswordError.style.display = "none";
    }

    if(this.emailAndPasswordIsAllRight){
      console.log("pode fazer login");

    }
  }

  onChangeInputEmail(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    const spanEmailError = this.spanEmailErrorIsEmpty.nativeElement;

    if(inputElement.value.length > 0){
      inputElement.style.border = "1px solid rgba(115, 115, 115, 0.2784313725)";
      spanEmailError.style.display = "none";
      this.emailAndPasswordIsAllRight = true;
      this.colorSvgEye = "black";
    }else {
      inputElement.style.border = "1px solid red";
      spanEmailError.style.display = "block";
      this.emailAndPasswordIsAllRight = false;
      this.colorSvgEye = "red";
    }
  }

  onChangeInputPassword(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    const spanPasswordError = this.spanPasswordErrorIsEmpty.nativeElement;

    if(inputElement.value.length > 0){
      inputElement.style.border = "1px solid rgba(115, 115, 115, 0.2784313725)";
      spanPasswordError.style.display = "none";
      this.emailAndPasswordIsAllRight = true;
      this.colorSvgEye = "black";
    }else {
      inputElement.style.border = "1px solid red";
      spanPasswordError.style.display = "block";
      this.emailAndPasswordIsAllRight = false;
      this.colorSvgEye = "red";
    }
  }

  onClickEyeOpen() {
    this.showEyeOpen = !this.showEyeOpen;

    this.inputTypePassword.nativeElement.type = "password";
  }

  onClickEyeClose() {
    this.showEyeOpen = !this.showEyeOpen;

    this.inputTypePassword.nativeElement.type = "text";
  }
}
