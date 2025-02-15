import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { User } from '../../../interface-entity/user';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { ChangePassword, UserService } from '../../../services-backend/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  valueInputPasswordActual = "#";
  valueInputPassword = "#";
  valueConfirmPassword = "@";
  allTheValidatePasswordIsRight = false;
  canClickedRegisterUser = false;
  passwordActualIsValid = false;
  user!: User;
  errorChangePassword!:ChangePassword;

  @ViewChild('spanConfirmPasswordIsNotEqualPassword') spanConfirmPasswordIsNotEqualPassword!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanMinimumEightCharacter') spanMinimumEightCharacter!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneLetterUpperCase') spanOneLetterUpperCase!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneLetterLowerCase') spanOneLetterLowerCase!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanMinimumOneNumber') spanMinimumOneNumber!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneSpecialCharacter') spanOneSpecialCharacter!: ElementRef<HTMLSpanElement>;

  @ViewChild('buttonRegisterAccount') buttonRegisterAccount!: ElementRef<HTMLButtonElement>;

  @ViewChild('inputPassowrdCurrent') inputPassowrdCurrent!: ElementRef<HTMLInputElement>;
  @ViewChild('inputPassowrd') inputPassowrd!: ElementRef<HTMLInputElement>;
  @ViewChild('inputConfirmPassword') inputConfirmPassword!: ElementRef<HTMLInputElement>;

  @ViewChild('spanErrorPasswordActual') spanErrorPasswordActual!: ElementRef<HTMLSpanElement>;
  @ViewChild('labelPasswordCurrent') labelPasswordCurrent!: ElementRef<HTMLLabelElement>;
  @ViewChild('spanErrorPasswordInformed') spanErrorPasswordInformed!: ElementRef<HTMLSpanElement>;

  constructor(private router: Router, private googleApiService: GoogleApiService,
    private userService: UserService
  ){}

  changeInputPasswordActual(e: Event, labelPasswordCurrent: HTMLLabelElement, inputPassowrdCurrent: HTMLInputElement){
    const input = e.target as HTMLInputElement;
    const valuePasswordActual = input.value;
    this.valueInputPasswordActual = valuePasswordActual;
    this.spanErrorPasswordInformed.nativeElement.style.display = 'none';

    if(valuePasswordActual.length < 3){
      this.changeInputToRed(inputPassowrdCurrent, this.spanErrorPasswordActual.nativeElement, labelPasswordCurrent);
      this.passwordActualIsValid = false;
    }else {
      this.changeInputToBlack(inputPassowrdCurrent, this.spanErrorPasswordActual.nativeElement, labelPasswordCurrent);
      this.passwordActualIsValid = true;
    }
  }

  changeInputPassword(e: Event, labelPassword: HTMLLabelElement, inputConfirmPassword: HTMLInputElement, labelConfirmPassword: HTMLLabelElement){
    const input = e.target as HTMLInputElement;
    const valuePassword = input.value;
    this.valueInputPassword = valuePassword;
    let validatePassword = false;

    this.spanConfirmPasswordIsNotEqualPassword.nativeElement.style.display = "flex";

    if(this.valueConfirmPassword === valuePassword){
      this.changeInputToBlack(inputConfirmPassword, this.spanConfirmPasswordIsNotEqualPassword.nativeElement, labelConfirmPassword);
    }else {
      this.changeInputToRed(inputConfirmPassword, this.spanConfirmPasswordIsNotEqualPassword.nativeElement, labelConfirmPassword);
    }

    if(valuePassword.length < 8){
      this.spanMinimumEightCharacter.nativeElement.style.color = "red";
      this.spanMinimumEightCharacter.nativeElement.classList.remove("valid");
      this.spanMinimumEightCharacter.nativeElement.classList.add("invalid");

      validatePassword = false;
    }else {
      this.spanMinimumEightCharacter.nativeElement.style.color = "green";
      this.spanMinimumEightCharacter.nativeElement.classList.remove("invalid");
      this.spanMinimumEightCharacter.nativeElement.classList.add("valid");

      validatePassword = true;
    }

    const oneLetterUppercase = /[A-Z]/;
    const oneLetterLowercase = /[a-z]/;
    const oneNumber = /^(?=.*\d).+$/;
    const oneSpecialCharacter = /^(?=.*[!@#$%^&*()_+{}|:"<>?]).+$/;

    if(oneLetterUppercase.test(valuePassword)){
      this.spanOneLetterUpperCase.nativeElement.style.color = "green";
      this.spanOneLetterUpperCase.nativeElement.classList.remove("invalid");
      this.spanOneLetterUpperCase.nativeElement.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanOneLetterUpperCase.nativeElement.style.color = "red";
      this.spanOneLetterUpperCase.nativeElement.classList.remove("valid");
      this.spanOneLetterUpperCase.nativeElement.classList.add("invalid");
      validatePassword = false;
    }

    if(oneLetterLowercase.test(valuePassword)){
      this.spanOneLetterLowerCase.nativeElement.style.color = "green";
      this.spanOneLetterLowerCase.nativeElement.classList.remove("invalid");
      this.spanOneLetterLowerCase.nativeElement.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanOneLetterLowerCase.nativeElement.style.color = "red";
      this.spanOneLetterLowerCase.nativeElement.classList.remove("valid");
      this.spanOneLetterLowerCase.nativeElement.classList.add("invalid");
      validatePassword = false;
    }

    if(oneNumber.test(valuePassword)){
      this.spanMinimumOneNumber.nativeElement.style.color = "green";
      this.spanMinimumOneNumber.nativeElement.classList.remove("invalid");
      this.spanMinimumOneNumber.nativeElement.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanMinimumOneNumber.nativeElement.style.color = "red";
      this.spanMinimumOneNumber.nativeElement.classList.remove("valid");
      this.spanMinimumOneNumber.nativeElement.classList.add("invalid");
      validatePassword = false;
    }

    if(oneSpecialCharacter.test(valuePassword)){
      this.spanOneSpecialCharacter.nativeElement.style.color = "green";
      this.spanOneSpecialCharacter.nativeElement.classList.remove("invalid");
      this.spanOneSpecialCharacter.nativeElement.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanOneSpecialCharacter.nativeElement.style.color = "red";
      this.spanOneSpecialCharacter.nativeElement.classList.remove("valid");
      this.spanOneSpecialCharacter.nativeElement.classList.add("invalid");
      validatePassword = false;
    }

    if(validatePassword){
      this.changeInputToBlack(input, null, labelPassword);
    }else {
      this.changeInputToRed(input, null, labelPassword);
    }

    this.validateIfPasswordAndConfirmPasswordIsEqual();
    this.allTheValidatePasswordIsRight = validatePassword;
  }

  changeInputRepeatThePassword(e: Event, labelConfirmPassword: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueConfirmPassword = valueInput;

    this.validateIfPasswordAndConfirmPasswordIsEqual();

    if(this.valueInputPassword === valueInput){
      this.changeInputToBlack(input, this.spanConfirmPasswordIsNotEqualPassword.nativeElement, labelConfirmPassword);
    }else {
      this.changeInputToRed(input, this.spanConfirmPasswordIsNotEqualPassword.nativeElement, labelConfirmPassword);
    }
  }

  validateIfPasswordAndConfirmPasswordIsEqual () {
    if(this.valueInputPassword === this.valueConfirmPassword){
      this.buttonRegisterAccount.nativeElement.style.backgroundColor = "#000";
      this.buttonRegisterAccount.nativeElement.style.color = "#fff";
      this.buttonRegisterAccount.nativeElement.style.cursor = "pointer";

      this.canClickedRegisterUser = true;
    }else {
      this.buttonRegisterAccount.nativeElement.style.backgroundColor = "rgb(179, 179, 179)";
      this.buttonRegisterAccount.nativeElement.style.color = "rgb(102, 102, 102)";
      this.buttonRegisterAccount.nativeElement.style.cursor = "not-allowed";
      this.canClickedRegisterUser = false;
    }
  }

  changeInputToRed (input: HTMLInputElement, span: HTMLSpanElement | null, label: HTMLLabelElement){
    if(span){
      span.style.display = 'flex';
    }
    input.style.borderColor = "red";
    input.style.color = "red";
    label.style.color = "red";
  }

  changeInputToBlack (input: HTMLInputElement, span: HTMLSpanElement | null, label: HTMLLabelElement){
    if(span){
      span.style.display = 'none';
    }
    input.style.borderColor = "rgba(115, 115, 115, 0.2784313725)";
    input.style.color = "black";
    label.style.color = "black";
  }

   onClickSaveInfo(){
    if(typeof window === 'undefined')return;
    // this.router.navigate(['/painel-do-cliente']);

    if(!this.canClickedRegisterUser)return;

    let canSendRegister = false;

    if(this.valueConfirmPassword === this.valueInputPassword && this.passwordActualIsValid){
      canSendRegister = true;
    }else {
      canSendRegister = false;
    }

    if (!canSendRegister) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if(canSendRegister){
      const userResult = UserLocalStorage();

      if(!userResult.isNullUserLocalStorage){
        const user = userResult.user;
        if(user){
          this.user = user;

          const objChangePassword = {
            actualPassword: this.valueInputPasswordActual,
            newPassword: this.valueInputPassword,
            userId: user.id,
            email: user.email
          }

          this.userService.PutChangePassword(objChangePassword, user.token).subscribe({
            next: (success) => {
              const data: ChangePassword = success.data;
              console.log(data);

              if(data.changePasswordSuccessfully){
                this.valueInputPasswordActual = '';
                this.valueInputPassword = '';
                this.valueConfirmPassword = '';

                this.inputPassowrdCurrent.nativeElement.value = "";
                this.inputPassowrd.nativeElement.value = "";
                this.inputConfirmPassword.nativeElement.value = "";
              };
            },
            error: dataError => {
              if(dataError.status === 400){
                const error: ChangePassword = dataError.error.data;
                this.errorChangePassword = error;

                if(!error.passwordValid){
                  this.changeInputToRed(this.inputPassowrdCurrent.nativeElement, this.spanErrorPasswordInformed.nativeElement, this.labelPasswordCurrent.nativeElement);
                }
              }

              if(dataError.status === 403){
                this.googleApiService.logout();
                localStorage.removeItem('user');
                this.router.navigate(['/user/login']);
                // this.confirmEmail = false;
              }
            }
          });
        }
      }

      if(userResult.isNullUserLocalStorage){
        localStorage.removeItem('user');
        this.router.navigate(['/user/login']);
        return;
      };



    }

  }
}
