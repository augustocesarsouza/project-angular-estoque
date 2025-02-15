import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SvgEyeOpenComponent } from '../../../all-svg/svg-eye-open/svg-eye-open.component';
import { UserService } from '../../../services-backend/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptedUser } from '../../../function-user/get-user-local-storage/encrypted-user';
import { ObjCodeUserEmailToRegisterAccountService } from '../../service/obj-code-user-email-to-register-account.service';
import { MyHttpService } from '../../service/my-http.service';
import { User } from '../../../interface-entity/user';
import { GoogleApiService } from '../../service/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  @ViewChild('inputTypePassword') inputTypePassword!: ElementRef<HTMLInputElement>;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('spanEmailErrorIsEmpty') spanEmailErrorIsEmpty!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanPasswordErrorIsEmpty') spanPasswordErrorIsEmpty!: ElementRef<HTMLSpanElement>;
  @ViewChild('appSvgEyeOpen') appSvgEyeOpen!: ElementRef<SvgEyeOpenComponent>;
  showEyeOpen = false;
  emailAndPasswordIsAllRight = false;
  colorSvgEye = "black";

  errorWhenLogin = false;
  emailSendToEmail = false;
  valueEmailPhoneCreate = "";
  codeUserCreate: Record<string, string> = {};
  user!: User;

  constructor(private userService: UserService, private router: Router,
    private objCodeUserPhone: ObjCodeUserEmailToRegisterAccountService,
  private http: MyHttpService, private route: ActivatedRoute, private googleApiService: GoogleApiService){}

  ngOnInit(): void {
    this.codeIsRightEmail = this.codeIsRightEmail.bind(this);
  }

  onClickEnterInput() {
    const countLengthEmail = this.inputEmail.nativeElement.value.length;
    const countLengthPassword = this.inputTypePassword.nativeElement.value.length;

    const inputEmail = this.inputEmail.nativeElement;
    const spanEmailError = this.spanEmailErrorIsEmpty.nativeElement;
    const inputTypePassword = this.inputTypePassword.nativeElement;
    const spanPasswordError = this.spanPasswordErrorIsEmpty.nativeElement;

    const email = inputEmail.value;
    const password = inputTypePassword.value;

    if(countLengthEmail <= 0 || !email.includes("@gmail")){
      inputEmail.style.border = "1px solid red";
      spanEmailError.style.display = "block";
      this.colorSvgEye = "red";
      this.emailAndPasswordIsAllRight = false;
    }

    if(countLengthPassword <= 3){
      inputTypePassword.style.border = "1px solid red";
      spanPasswordError.style.display = "block";
      this.colorSvgEye = "red";
      this.emailAndPasswordIsAllRight = false;
    }else {
      spanPasswordError.style.display = "none";
    }


    if(this.emailAndPasswordIsAllRight){
      this.userService.Login(email, password).subscribe({
        next: (success) => {
          const dataLoggin = success.data;

          if(dataLoggin.passwordIsCorrect){
            const user = dataLoggin.userDTO;
            this.user = user;

            // Quando quiser testar para mandar para email real só comentar esse block
            let numberRandom = '';

            for (let i = 0; i < 6; i++) {
              const code = Math.floor(Math.random() * 9) + 1;
              numberRandom += code;
            }

            const userId = user.id;
            this.codeUserCreate[userId] = numberRandom;

            this.objCodeUserPhone.updateobjCode(this.codeUserCreate);
            // esse block

            this.valueEmailPhoneCreate = email;
            this.emailSendToEmail = true;
            // this.router.navigate(['/']);
          }
        },
        error: error => {
          if(error.status === 400){
            const errorDate = error.error.data;

            this.errorWhenLogin = !errorDate.passwordIsCorrect;

            setTimeout(() => {
              this.errorWhenLogin = false;
            }, 2000);
          }
        }
      });
    }
  }

  codeIsRightEmail () {
    if(this.user){
      EncryptedUser(this.user);
    }
  }

  onClickLoginWithGoogle(){
    // this.http.authUrl().subscribe((obj) => {
    //   window.location.href = obj.url;
    // });

    this.googleApiService.functionLogin();
  }

  onClickLogout() {
    this.googleApiService.logout();
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
