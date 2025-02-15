import { AfterViewInit, Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObjCodeUserEmailToRegisterAccountService } from '../../service/obj-code-user-email-to-register-account.service';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { User } from '../../../interface-entity/user';
import { Router } from '@angular/router';
import { UserService } from '../../../services-backend/user.service';

@Component({
  selector: 'app-code-send-to-email',
  templateUrl: './code-send-to-email.component.html',
  styleUrl: './code-send-to-email.component.scss'
})
export class CodeSendToEmailComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() valueEmailPhoneCreate!: string;
  @Input() codeIsRightEmail!: () => void;
  @Input() user!: User;

  allInputs!: NodeListOf<HTMLInputElement>;
  buttonNext!: HTMLInputElement;
  private SubscriptionAll: Subscription[] = [];

  valueInputPhoneOne = '';
  valueInputPhoneTwo = '';
  valueInputPhoneThree = '';
  valueInputPhoneFour = '';
  valueInputPhoneFive = '';
  valueInputPhoneSix = '';

  allSixVerificationCodeIsComplet = false;
  codeUserCreate: Record<string, string> = {};
  codeFull = '';
  codeIsWrong = false;
  codeFoundSuccessfully = false;
  intervalId!: number;
  secondsPass = 5;

  constructor(private objCodeUserPhone: ObjCodeUserEmailToRegisterAccountService,
     private router: Router, private userService: UserService, private ngZone: NgZone){}

  ngOnInit(): void {
    if(typeof window === 'undefined')return;

    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        this.user = user;
      }
    }

    // CONTINUAR painel-do-cliente

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/user/login']);
      return;
    };
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    this.allInputs = document.querySelectorAll('.input-celphone') as NodeListOf<HTMLInputElement>;
    this.buttonNext = document.querySelector('.button-next') as HTMLInputElement;

    if(this.objCodeUserPhone.currentObjCode){
      this.SubscriptionAll.push(this.objCodeUserPhone.objCode$.subscribe((objCode) => {
        this.codeUserCreate = objCode;
        console.log(this.codeUserCreate);

      }));
    }
  }

  clickInputVerificationCode = () => {
    for (const input of Array.from(this.allInputs)) {

      if (Number(input.value) === 0) {
        input.focus();
        break;
      }
    }
  };

  changeInputVerificationCode(e: Event, index: number): void {
    const input = e.target as HTMLInputElement;

    if (Number.isNaN(Number(input.value))) {
      input.value = '';
      return;
    }

    let codeFull = "";
    for (const input of Array.from(this.allInputs)) {
      codeFull += input.value;
    }

    this.codeFull = codeFull;

    if (input.value.length === 1 && index < this.allInputs.length - 1) {
      this.allInputs[index + 1].focus();
    }

    this.functionQuantityInputWithValueNumber();
  }

  keyDownVerificationCode = (e: Event, index: number) => {
    const input = e.target as HTMLInputElement;
    const event = e as KeyboardEvent;

    if (event.code === 'Backspace' && index > 0) {
      if (input.value.length === 1) {
        // allInputs[index].value = '';
        this.allInputs[index - 1].focus();
        this.allInputs[index].value = '';
      } else {
        this.allInputs[index - 1].focus();
        this.allInputs[index - 1].value = '';
      }

      let quantityNumberInput = 0;

      this.allInputs.forEach((el) => {
        if(Number(el.value)){
          quantityNumberInput += 1;
        }
      });

      if((quantityNumberInput - 1) < 6){
        this.allSixVerificationCodeIsComplet = false;
        this.buttonNext.style.cursor = "not-allowed";
        this.buttonNext.style.opacity = "0.7";
      }

      let codeFull = "";
      for (const input of Array.from(this.allInputs)) {
        codeFull += input.value;
      }

      this.codeFull = codeFull;

      e.preventDefault();
    }
  };

  functionQuantityInputWithValueNumber(){
    let quantityNumberInput = 0;

    this.allInputs.forEach((el) => {
      if(Number(el.value)){
        quantityNumberInput += 1;
      }
    });

    if(quantityNumberInput === 6){
      this.allSixVerificationCodeIsComplet = true;

      // this.buttonNext.style.backgroundColor = "#ee4d2d";
      this.buttonNext.style.cursor = "pointer";
      this.buttonNext.style.opacity = "1";
    }
  }

  onClickResendCode = () => {
    let numberRandom = '';

    for (let i = 0; i < 6; i++) {
      const code = Math.floor(Math.random() * 9) + 1;
      numberRandom += code;
    }

    const userId = this.user.id;
    this.codeUserCreate[userId] = numberRandom;

    this.objCodeUserPhone.updateobjCode(this.codeUserCreate);

    // setCodeUserCreate((code) => {
    //   return { ...code, [numberPhone]: numberRandom };
    // });

    // const resp = await fetch('http://localhost:3000/send-message', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(objSend),
    // });

    // if (resp.status === 200) {
    //   setShowStepToContinueCreateAccount(true);
    // } else if (resp.status === 400) {
    //   setShowStepToContinueCreateAccount(false);
    // }
  };

  clickNextStep() {
    if(!this.allSixVerificationCodeIsComplet) return;

    const email = this.valueEmailPhoneCreate;
    const userId = this.user.id;

    if(this.codeUserCreate[userId] === this.codeFull){
      this.codeFoundSuccessfully = true;
      this.codeIsRightEmail();

      if(this.codeFoundSuccessfully){
        this.ngZone.runOutsideAngular(() => this.startRotation());
      }
    }else {
      this.codeFoundSuccessfully = false;
    }

    const objCode = {
      userId: this.user.id,
      email: email,
      code: Number(this.codeFull),
    };
    console.log(objCode); // DESCOMENTAR PARA MANDAR EMAIL PARA VERIFICAR CODIGO E
    // DESCOMENTAR NO DB, PARA MANDAR PARA O EMAIL QUE LÁ ESTÁ COMENTADO

    // this.userService.VerifyCodeToLogin(objCode).subscribe({
    //   next: (success) => {
    //     const data = success.data;
    //     this.codeFoundSuccessfully = data.codeFoundSuccessfully;
    //     const codeFoundSuccessfully = data.codeFoundSuccessfully;

    //     if(codeFoundSuccessfully){
    //       this.ngZone.runOutsideAngular(() => this.startRotation());
    //     }
    //   },
    //   error: error => {
    //     if(error.status === 400){
    //       console.log(error);
    //     }
    //   }
    // });
  }

  startRotation(): void {
    if (typeof window === "undefined" || typeof localStorage === "undefined")return;

    clearTimeout(this.intervalId);
    this.intervalId = window.setInterval(() => {
      this.ngZone.run(() => {  // Isso garante que o Angular atualize a UI
        this.secondsPass -= 1;

        if (this.secondsPass === 0) {
          clearTimeout(this.intervalId);
          this.router.navigate(['/']);
        }
      });
    }, 1000) as unknown as number;
  }

  ngOnDestroy(): void {
    if (this.SubscriptionAll.length > 0) {
      this.SubscriptionAll.forEach((el) => {
        el.unsubscribe();
      })
    }
  }
}
