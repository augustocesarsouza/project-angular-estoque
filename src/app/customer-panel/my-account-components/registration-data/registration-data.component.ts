import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { User } from '../../../interface-entity/user';
import Inputmask from 'inputmask';
import { UserService, UserUpdate } from '../../../services-backend/user.service';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { UpdateUserService } from '../../service/update-user.service';
import { EncryptedUser } from '../../../function-user/get-user-local-storage/encrypted-user';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrl: './registration-data.component.scss'
})
export class RegistrationDataComponent implements OnInit, AfterViewInit {
  user!: User;

  valueInputName = "";
  valueInputLastName = "";
  valueInputBirthdate = "";
  valueInputCpf = "";
  valueInputEmail = "";
  valueInputLandline = "";
  valueInputCellPhoneClean = "";
  valueInputCellPhone = "";
  selectedGender = '';

  inputNameIsValid = false;
  lastNameIsValid = false;
  birthdateIsValid = false;
  genderIsValid = false;
  cpfIsValid = false;
  emailIsValid = false;
  landlineIsValid = true;
  cellPhoneIsValid = false;

  @ViewChild('inputNameUser') inputNameUser!: ElementRef<HTMLInputElement>;
  @ViewChild('inputLastName') inputLastName!: ElementRef<HTMLInputElement>;
  @ViewChild('selectGender') selectGender!: ElementRef<HTMLInputElement>;
  @ViewChild('inputBirthdate') inputBirthdate!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCpf') inputCpf!: ElementRef<HTMLInputElement>;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('inputLandline') inputLandline!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCellphone') inputCellphone!: ElementRef<HTMLInputElement>;

  @ViewChild('labelName') labelName!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelLastName') labelLastName!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelBirthdate') labelBirthdate!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelGender') labelGender!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelCpf') labelCpf!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelEmail') labelEmail!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelLandline') labelLandline!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelCellPhone') labelCellPhone!: ElementRef<HTMLLabelElement>;

  @ViewChild('spanErrorNameUser') spanErrorNameUser!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorLastName') spanErrorLastName!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorBirthDate') spanErrorBirthDate!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorGender') spanErrorGender!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCpf') spanErrorCpf!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorEmail') spanErrorEmail!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorLandline') spanErrorLandline!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCellPhone') spanErrorCellPhone!: ElementRef<HTMLSpanElement>;

  addressUser!:User;

  constructor(private userService: UserService, private router: Router,
    private googleApiService: GoogleApiService, private updateUserService: UpdateUserService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      if(user){
        this.user = user;

        this.userService.FindByIdToDatePersonal(user).subscribe({
          next: (success) => {
              const data = success.data;
              this.addressUser = data;
              this.fillFormUserAddress(data);
          },
          error: error => {
            if(error.status === 400){
              // this.confirmEmail = false;
            }

            if(error.status === 403){
              this.googleApiService.logout();
              localStorage.removeItem('user');
              this.router.navigate(['/user/login']);
            }
          }
        });
      }
    }
  }

  fillFormUserAddress(data: User) {
    const name = data.name;
    const lastName = data.lastName;
    const cpf = data.cpf;
    const gender = data.gender;
    const email = data.email;
    const cellPhone = data.cellPhone;

    if(name.length >= 3){
      this.inputNameIsValid = true;
    }

    if(lastName.length >= 3){
      this.lastNameIsValid = true;
    }

    if(gender.length > 0){
      this.genderIsValid = true;
    }

    const birthDate = data.birthDate.split("T");
    const firstSplit = birthDate[0];
    const yearMonthDay = firstSplit.split("-");

    const year = yearMonthDay[0];
    const month = yearMonthDay[1];
    const day = yearMonthDay[2];

    const yearMonthDayShowUser = `${day}/${month}/${year}`;

    if(data){
      this.inputNameUser.nativeElement.value = data.name;
      this.inputLastName.nativeElement.value = data.lastName;

      if(firstSplit !== "0001-01-01"){
        if(yearMonthDayShowUser.length >= 8){
          this.birthdateIsValid = true;
        }

        this.changeStyleInputToFillUserAddress(this.inputBirthdate.nativeElement);

        this.inputBirthdate.nativeElement.value = yearMonthDayShowUser;
        this.valueInputBirthdate = yearMonthDayShowUser;
      }else {
        this.birthdateIsValid = false;
      }

      if(cpf !== "00000000000"){
        if(cpf.length >= 11){
          this.cpfIsValid = true;
        }

        this.changeStyleInputToFillUserAddress(this.inputCpf.nativeElement);

        this.inputCpf.nativeElement.value = cpf;
        this.valueInputCpf = cpf;
      }else {
        this.cpfIsValid = false;
      }

      if(email.length > 0 && email.includes("@gmail") || email.includes("@hotmail")){
        this.emailIsValid = true;
      }else {
        this.emailIsValid = false;
      }

      if(cellPhone.length >= 11){
        this.cellPhoneIsValid = true;
      }else {
        this.cellPhoneIsValid = false;
      }

      this.changeStyleInputToFillUserAddress(this.inputEmail.nativeElement);

      this.selectGender.nativeElement.value = data.gender;

      this.inputEmail.nativeElement.value = email;
      this.inputLandline.nativeElement.value = data.landline;
      this.inputCellphone.nativeElement.value = cellPhone;

      this.valueInputName = name;
      this.valueInputLastName = lastName;
      this.selectedGender = gender;
      this.valueInputEmail = email;
      this.valueInputLandline = data.landline;
      this.valueInputCellPhone = cellPhone;
    }
  }

  changeStyleInputToFillUserAddress(input: HTMLInputElement) {
    input.style.color = "#999";
    input.style.border = "none";
    input.style.paddingLeft = "0px";
    input.style.pointerEvents = "none";
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const inputBirthdate = this.inputBirthdate.nativeElement;
    const inputCpf = this.inputCpf.nativeElement;
    const inputLandline = this.inputLandline.nativeElement;
    const inputCellphone = this.inputCellphone.nativeElement;

    if(inputBirthdate){
      const mask = Inputmask({
        mask: '99/99/9999',
        placeholder: '__/__/____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputBirthdate);
    }

    if(inputCpf){
      const mask = Inputmask({
        mask: '999.999.999-99',
        placeholder: '___.___.___-__',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputCpf);
    }

    if(inputLandline){
      const mask = Inputmask({
        mask: "(99) 9999-9999",
        placeholder: "(__) ____-____",
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputLandline);
    }

    if(inputCellphone){
      const mask = Inputmask({
        mask: '(+99) 99 99999 9999',
        placeholder: '(+__) __ _____ ____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputCellphone);
    }
  }

  changeInputNameUser(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputName = valueInput;

    if(valueInput.length >= 3){
      this.changeInputToBlack(input, this.spanErrorNameUser.nativeElement, label);
      this.inputNameIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorNameUser.nativeElement, label);
      this.inputNameIsValid = false;
    }
  }

  changeInputLastName(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputLastName = valueInput;

    if(valueInput.length >= 3){
      this.changeInputToBlack(input, this.spanErrorLastName.nativeElement, label);
      this.lastNameIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorLastName.nativeElement, label);
      this.lastNameIsValid = false;
    }
  }

  changeInputBirthdate(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value.replace(/[_/\s]/g, "");
    this.valueInputBirthdate = input.value;

    if(valueInput.length >= 8){
      this.changeInputToBlack(input, this.spanErrorBirthDate.nativeElement, label);
      this.birthdateIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorBirthDate.nativeElement, label);
      this.birthdateIsValid = false;
    }
  }

  onGenderChange(e: Event, label: HTMLLabelElement) {
    const selectedGender = e.target as HTMLInputElement;
    const selectValue = selectedGender.value;
    this.selectedGender = selectValue;

    if(selectValue.length > 0){
      this.changeInputToBlack(selectedGender, this.spanErrorGender.nativeElement, label);
      this.genderIsValid = true;
    }else {
      this.changeInputToRed(selectedGender, this.spanErrorGender.nativeElement, label);
      this.genderIsValid = false;
    }
  }

  changeInputCpf(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    this.valueInputCpf = input.value;
    const valueInput = input.value.replace(/[_.-]/g, "");

    if(valueInput.length >= 11){
      this.changeInputToBlack(input, this.spanErrorCpf.nativeElement, label);
      this.cpfIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorCpf.nativeElement, label);
      this.cpfIsValid = false;
    }
  }

  changeInputEmail(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value.replace(/[_.-]/g, "");
    this.valueInputEmail = input.value;

    if(valueInput.length > 0 && valueInput.includes("@gmail") || valueInput.includes("@hotmail")){
      this.changeInputToBlack(input, this.spanErrorEmail.nativeElement, label);
      this.emailIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorEmail.nativeElement, label);
      this.emailIsValid = false;
    }
  }

  changeInputLandline(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInputClean = input.value;
    const valueInput = input.value.replace(/[_\-\s()]/g, "");

    if(valueInput.length > 0){
      if(valueInput.length < 10){
        this.changeInputToRed(input, this.spanErrorLandline.nativeElement, label);
        this.landlineIsValid = false;
      }else {
        this.changeInputToBlack(input, this.spanErrorLandline.nativeElement, label);
        this.valueInputLandline = valueInputClean;
        this.landlineIsValid = true;
      }
    }else {
      this.changeInputToBlack(input, this.spanErrorLandline.nativeElement, label);
      this.valueInputLandline = valueInputClean;
      this.landlineIsValid = true;
    }
  }

  changeInputCellPhone(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInputClean = input.value;

    this.valueInputCellPhoneClean = valueInputClean;
    const valueInput = input.value.replace(/[_\-\s()]/g, "");
    this.valueInputCellPhone = valueInputClean;

    if(valueInput.length >= 11){
      this.changeInputToBlack(input, this.spanErrorCellPhone.nativeElement, label);
      this.cellPhoneIsValid = true;

      // se for maior que 11 mandar isso para DB "valueInputClean"
    }else {
      this.changeInputToRed(input, this.spanErrorCellPhone.nativeElement, label);
      this.cellPhoneIsValid = false;
      // Se for menor 11 nao mandar nada
      this.valueInputCellPhone = "";
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
    let canSendRegister = false;

    if(this.inputNameIsValid && this.lastNameIsValid && this.birthdateIsValid && this.genderIsValid && this.cpfIsValid && this.emailIsValid && this.landlineIsValid && this.cellPhoneIsValid){
      canSendRegister = true;
    }else {
      canSendRegister = false;
    }

    if(!this.inputNameIsValid){
      this.changeInputToRed(this.inputNameUser.nativeElement, this.spanErrorNameUser.nativeElement, this.labelName.nativeElement);
    }

    if(!this.lastNameIsValid){
      this.changeInputToRed(this.inputLastName.nativeElement, this.spanErrorLastName.nativeElement, this.labelLastName.nativeElement);
    }

    if(!this.birthdateIsValid){
      this.changeInputToRed(this.inputBirthdate.nativeElement, this.spanErrorBirthDate.nativeElement, this.labelBirthdate.nativeElement);
    }

    if(!this.genderIsValid){
      this.changeInputToRed(this.selectGender.nativeElement, this.spanErrorGender.nativeElement, this.labelGender.nativeElement);
    }

    if(!this.cpfIsValid){
      this.changeInputToRed(this.inputCpf.nativeElement, this.spanErrorCpf.nativeElement, this.labelCpf.nativeElement);
    }

    if(!this.emailIsValid){
      this.changeInputToRed(this.inputEmail.nativeElement, this.spanErrorEmail.nativeElement, this.labelEmail.nativeElement);
    }

    if(!this.landlineIsValid){
      this.changeInputToRed(this.inputLandline.nativeElement, this.spanErrorLandline.nativeElement, this.labelLandline.nativeElement);
    }

    if(!this.cellPhoneIsValid){
      this.changeInputToRed(this.inputCellphone.nativeElement, this.spanErrorCellPhone.nativeElement, this.labelCellPhone.nativeElement);
    }

    if (!canSendRegister) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if(canSendRegister){
      const userSave = {
        userId: this.user.id,
        name: this.valueInputName,
        lastName: this.valueInputLastName,
        birthDate: this.valueInputBirthdate,
        gender: this.selectedGender,
        cpf: this.valueInputCpf,
        email: this.valueInputEmail,
        landline: this.valueInputLandline,
        cellPhone: this.valueInputCellPhoneClean,
        userImage: "",
        token: this.user.token
      } as UserUpdate;

      this.userService.PutUserInfo(userSave).subscribe({
        next: (success) => {
            const data = success.data;

            const user = {
              id: this.user.id,
              cellPhone: userSave.cellPhone,
              email: this.user.email,
              name: this.user.name,
              token: this.user.token,
              lastName: "",
              birthDate: "",
              gender: "",
              cpf: "",
              landline: "",
              userImage: "",
              confirmEmail: 0,
            };

            EncryptedUser(user);

            this.updateUserService.updateupdateUser(data);
            this.fillFormUserAddress(data);
        },
        error: error => {
          if(error.status === 400){
            // this.confirmEmail = false;
          }

          if(error.status === 403){
            this.googleApiService.logout();
            localStorage.removeItem('user');
            this.router.navigate(['/user/login']);
          }
        }
      });
    }
  }
}
