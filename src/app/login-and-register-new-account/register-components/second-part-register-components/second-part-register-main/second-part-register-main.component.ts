import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WhereIsComingCustomerPanelAndRegisterUserService } from '../../../service/where-is-coming-customer-panel-and-register-user.service';
import { UserService } from '../../../../services-backend/user.service';
import { UpdateUserService } from '../../../../customer-panel/service/update-user.service';
import { EncryptedUser } from '../../../../function-user/get-user-local-storage/encrypted-user';
import Inputmask from 'inputmask';
import { UserLogged } from '../../../service/google-api.service';
import { EncryptedUserLoggedWithGoogle } from '../../../../function-user/get-user-local-storage/encrypted-user-logged-with-google';

interface AllStates {
  state: string;
  sigla: string;
}

@Component({
  selector: 'app-second-part-register-main',
  templateUrl: './second-part-register-main.component.html',
  styleUrl: './second-part-register-main.component.scss'
})
export class SecondPartRegisterMainComponent implements OnInit, AfterViewInit, OnDestroy {
  allStates!: AllStates[];
  cpfInvalid = false;
  cpfError = false;
  allTheValidatePasswordIsRight = false;

  spanMinimumEightCharacter!: HTMLSpanElement;
  spanOneLetterUpperCase!: HTMLSpanElement;
  spanOneLetterLowerCase!: HTMLSpanElement;
  spanMinimumOneNumber!: HTMLSpanElement;
  spanOneSpecialCharacter!: HTMLSpanElement;

  @ViewChild('spanConfirmPasswordIsNotEqualPassword') spanConfirmPasswordIsNotEqualPassword!: ElementRef<HTMLSpanElement>;

  valueInputPassword = "#";
  valueConfirmPassword = "@";

  inputNameIsValid = false;
  lastNameIsValid = false;
  birthdateIsValid = false;
  genderIsValid = false;
  cpfIsValid = false;
  emailIsValid = false;
  cellPhoneIsValid = false;

  cepIsValid = false;
  titleIsValid = false;
  addressIsValid = false;
  numberHomeIsValid = false;
  neighborhoodIsValid = false;
  cityIsValid = false;
  stateIsValid = false;

   // Complete Your Registration
  @ViewChild('inputNameUser') inputNameUser!: ElementRef<HTMLInputElement>;
  @ViewChild('inputLastName') inputLastName!: ElementRef<HTMLInputElement>;
  @ViewChild('selectGender') selectGender!: ElementRef<HTMLInputElement>;
  @ViewChild('inputBirthdate') inputBirthdate!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCpf') inputCpf!: ElementRef<HTMLInputElement>;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('inputLandline') inputLandline!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCellphone') inputCellphone!: ElementRef<HTMLInputElement>;

  @ViewChild('spanErrorNameUser') spanErrorNameUser!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorLastName') spanErrorLastName!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorBirthDate') spanErrorBirthDate!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorGender') spanErrorGender!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCpf') spanErrorCpf!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorEmail') spanErrorEmail!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorLandline') spanErrorLandline!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCellPhone') spanErrorCellPhone!: ElementRef<HTMLSpanElement>;

  @ViewChild('labelName') labelName!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelLastName') labelLastName!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelBirthdate') labelBirthdate!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelGender') labelGender!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelCpf') labelCpf!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelEmail') labelEmail!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelLandline') labelLandline!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelCellPhone') labelCellPhone!: ElementRef<HTMLLabelElement>;

  // AddAddress
  // @ViewChild('inputCep') inputCep!: ElementRef<HTMLInputElement>;
  // @ViewChild('inputTitle') inputTitle!: ElementRef<HTMLInputElement>;
  // @ViewChild('inputAddress') inputAddress!: ElementRef<HTMLInputElement>;
  // @ViewChild('inputNumberHome') inputNumberHome!: ElementRef<HTMLInputElement>;
  // @ViewChild('inputNeighborhood') inputNeighborhood!: ElementRef<HTMLInputElement>;
  // @ViewChild('inputCity') inputCity!: ElementRef<HTMLInputElement>;
  // @ViewChild('inputComplementOptional') inputComplementOptional!: ElementRef<HTMLInputElement>;
  // @ViewChild('selectStates') selectStates!: ElementRef<HTMLInputElement>;
  // @ViewChild('buttonRegisterAccount') buttonRegisterAccount!: ElementRef<HTMLButtonElement>;
  buttonRegisterAccount!: HTMLButtonElement;

  @ViewChild('spanErrorCep') spanErrorCep!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorTitle') spanErrorTitle!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorAddress') spanErrorAddress!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorNumberHome') spanErrorNumberHome!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorNeighborhood') spanErrorNeighborhood!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCity') spanErrorCity!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorState') spanErrorState!: ElementRef<HTMLSpanElement>;

  @ViewChild('labelCep') labelCep!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelTitle') labelTitle!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelAddress') labelAddress!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelNumberHome') labelNumberHome!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelNeighborhood') labelNeighborhood!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelCity') labelCity!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelState') labelState!: ElementRef<HTMLLabelElement>;

  acceptedNews = false;
  agreePolitics = false;

  canClickedRegisterUser = false;

  valueInputName = "";
  valueInputLastName = "";
  valueInputBirthdate = "";
  valueInputCpf = "";
  valueInputEmail = "";
  valueInputLandline = "";
  valueInputCellPhone = "";

  valueInputCep = "";
  valueInputTitle = -1;
  valueInputRecipientName = "";
  valueInputAddress = "";
  valueInputNumberHome = "";
  valueInputComplementOptional = "";
  valueInputNeighborhood = "";
  valueInputCity = "";
  valueInputReferencePoint = "";

  selectedGender = '';
  selectedState = '';

  constructor(private userService: UserService, private router: Router,
    private whereIsComingCustomerPanelAndRegisterUserService: WhereIsComingCustomerPanelAndRegisterUserService,
    private updateUserService: UpdateUserService
  ){}

  ngOnInit(): void {
    this.verificarSelecao = this.verificarSelecao.bind(this);
    this.getSpanMinimumEightCharacter = this.getSpanMinimumEightCharacter.bind(this);
    this.getSpanOneLetterUpperCase = this.getSpanOneLetterUpperCase.bind(this);
    this.getSpanOneLetterLowerCase = this.getSpanOneLetterLowerCase.bind(this);
    this.getSpanMinimumOneNumber = this.getSpanMinimumOneNumber.bind(this);
    this.getSpanOneSpecialCharacter = this.getSpanOneSpecialCharacter.bind(this);
    this.getButtonRegisterAccount = this.getButtonRegisterAccount.bind(this);
    this.onClickRegister = this.onClickRegister.bind(this);

    this.allStates = [
      { state: "Acre", sigla: "AC" },
      { state: "Alagoas", sigla: "AL" },
      { state: "Amapá", sigla: "AP" },
      { state: "Amazonas", sigla: "AM" },
      { state: "Bahia", sigla: "BA" },
      { state: "Ceará", sigla: "CE" },
      { state: "Espírito Santo", sigla: "ES" },
      { state: "Goiás", sigla: "GO" },
      { state: "Maranhão", sigla: "MA" },
      { state: "Mato Grosso", sigla: "MT" },
      { state: "Mato Grosso do Sul", sigla: "MS" },
      { state: "Minas Gerais", sigla: "MG" },
      { state: "Pará", sigla: "PA" },
      { state: "Paraíba", sigla: "PB" },
      { state: "Paraná", sigla: "PR" },
      { state: "Pernambuco", sigla: "PE" },
      { state: "Piauí", sigla: "PI" },
      { state: "Rio de Janeiro", sigla: "RJ" },
      { state: "Rio Grande do Norte", sigla: "RN" },
      { state: "Rio Grande do Sul", sigla: "RS" },
      { state: "Rondônia", sigla: "RO" },
      { state: "Roraima", sigla: "RR" },
      { state: "Santa Catarina", sigla: "SC" },
      { state: "São Paulo", sigla: "SP" },
      { state: "Sergipe", sigla: "SE" },
      { state: "Tocantins", sigla: "TO" }
    ];
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const inputBirthdate = this.inputBirthdate.nativeElement;
    const inputCpf = this.inputCpf.nativeElement;
    const inputLandline = this.inputLandline.nativeElement;
    const inputCellphone = this.inputCellphone.nativeElement;
    // const inputCep = this.inputCep.nativeElement;
    // const inputNumberHome = this.inputNumberHome.nativeElement;

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
        showMaskOnFocus: false,
      });
      mask.mask(inputCellphone);
    }
  }

  getSpanMinimumEightCharacter(span: HTMLSpanElement) {
    this.spanMinimumEightCharacter = span;
  }

  getSpanOneLetterUpperCase(span: HTMLSpanElement) {
    this.spanOneLetterUpperCase = span;
  }

  getSpanOneLetterLowerCase(span: HTMLSpanElement) {
    this.spanOneLetterLowerCase = span;
  }

  getSpanMinimumOneNumber(span: HTMLSpanElement) {
    this.spanMinimumOneNumber = span;
  }

  getSpanOneSpecialCharacter(span: HTMLSpanElement) {
    this.spanOneSpecialCharacter = span;
  }

  getButtonRegisterAccount(button: HTMLButtonElement) {
    this.buttonRegisterAccount = button;
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
      this.spanMinimumEightCharacter.style.color = "red";
      this.spanMinimumEightCharacter.classList.remove("valid");
      this.spanMinimumEightCharacter.classList.add("invalid");

      validatePassword = false;
    }else {
      this.spanMinimumEightCharacter.style.color = "green";
      this.spanMinimumEightCharacter.classList.remove("invalid");
      this.spanMinimumEightCharacter.classList.add("valid");

      validatePassword = true;
    }

    const oneLetterUppercase = /[A-Z]/;
    const oneLetterLowercase = /[a-z]/;
    const oneNumber = /^(?=.*\d).+$/;
    const oneSpecialCharacter = /^(?=.*[!@#$%^&*()_+{}|:"<>?]).+$/;

    if(oneLetterUppercase.test(valuePassword)){
      this.spanOneLetterUpperCase.style.color = "green";
      this.spanOneLetterUpperCase.classList.remove("invalid");
      this.spanOneLetterUpperCase.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanOneLetterUpperCase.style.color = "red";
      this.spanOneLetterUpperCase.classList.remove("valid");
      this.spanOneLetterUpperCase.classList.add("invalid");
      validatePassword = false;
    }

    if(oneLetterLowercase.test(valuePassword)){
      this.spanOneLetterLowerCase.style.color = "green";
      this.spanOneLetterLowerCase.classList.remove("invalid");
      this.spanOneLetterLowerCase.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanOneLetterLowerCase.style.color = "red";
      this.spanOneLetterLowerCase.classList.remove("valid");
      this.spanOneLetterLowerCase.classList.add("invalid");
      validatePassword = false;
    }

    if(oneNumber.test(valuePassword)){
      this.spanMinimumOneNumber.style.color = "green";
      this.spanMinimumOneNumber.classList.remove("invalid");
      this.spanMinimumOneNumber.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanMinimumOneNumber.style.color = "red";
      this.spanMinimumOneNumber.classList.remove("valid");
      this.spanMinimumOneNumber.classList.add("invalid");
      validatePassword = false;
    }

    if(oneSpecialCharacter.test(valuePassword)){
      this.spanOneSpecialCharacter.style.color = "green";
      this.spanOneSpecialCharacter.classList.remove("invalid");
      this.spanOneSpecialCharacter.classList.add("valid");
      validatePassword = true;
    }else {
      this.spanOneSpecialCharacter.style.color = "red";
      this.spanOneSpecialCharacter.classList.remove("valid");
      this.spanOneSpecialCharacter.classList.add("invalid");
      validatePassword = false;
    }

    if(validatePassword){
      this.changeInputToBlack(input, null, labelPassword);
    }else {
      this.changeInputToRed(input, null, labelPassword);
    }

    this.validateIfCheckboxIsCheckedAndPasswordAndConfirmPasswordIsEqual();
    this.allTheValidatePasswordIsRight = validatePassword;
  }

  changeInputRepeatThePassword(e: Event, labelConfirmPassword: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueConfirmPassword = valueInput;

    this.validateIfCheckboxIsCheckedAndPasswordAndConfirmPasswordIsEqual();

    if(this.valueInputPassword === valueInput){
      this.changeInputToBlack(input, this.spanConfirmPasswordIsNotEqualPassword.nativeElement, labelConfirmPassword);
    }else {
      this.changeInputToRed(input, this.spanConfirmPasswordIsNotEqualPassword.nativeElement, labelConfirmPassword);
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

  changeInputLandline(e: Event) {
    const input = e.target as HTMLInputElement;
    const valueInputClean = input.value;
    const valueInput = input.value.replace(/[_\-\s()]/g, "");

    if(valueInput.length >= 10){
      // mandar isso para DB "valueInputClean"
      this.valueInputLandline = valueInputClean;
    }else {
      // se for menor que 10, manda vazio para o DB
      this.valueInputLandline = "";
    }
  }

  changeInputCellPhone(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInputClean = input.value;
    const valueInput = input.value.replace(/[_\-\s()]/g, "");
    this.valueInputCellPhone = valueInputClean;

    if(valueInput.length >= 14){
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

  changeInputTitle(e: Event, label: HTMLLabelElement) {
    const selected = e.target as HTMLInputElement;
    const selectValue = selected.value;

    if(selectValue.length > 0){
      this.changeInputToBlack(selected, this.spanErrorTitle.nativeElement, label);
      this.titleIsValid = true;

      if(selectValue === "H"){
        this.valueInputTitle = 0;
      }else if(selectValue === "W"){
        this.valueInputTitle = 1;
      }
    }else {
      this.changeInputToRed(selected, this.spanErrorTitle.nativeElement, label);
      this.titleIsValid = false;
    }
  }

  changeInputRecipientName(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputRecipientName = valueInput;
    console.log(label);
  }

  changeInputAddress(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputAddress = valueInput;

    const regex = /\b(Rua|Avenida|Alameda)\b/i;

    if(regex.test(valueInput)){
      this.changeInputToBlack(input, this.spanErrorAddress.nativeElement, label);
      this.addressIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorAddress.nativeElement, label);
      this.addressIsValid = false;
    }
  }

  changeInputNumberHome(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputNumberHome = valueInput;

    if(valueInput.length > 0){
      this.changeInputToBlack(input, this.spanErrorNumberHome.nativeElement, label);
      this.numberHomeIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorNumberHome.nativeElement, label);
      this.numberHomeIsValid = false;
    }
  }

  changeInputComplementOptional(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputComplementOptional = valueInput;
    console.log(label);
  }

  changeInputNeighborhood(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputNeighborhood = valueInput;

    if(valueInput.length > 0){
      this.changeInputToBlack(input, this.spanErrorNeighborhood.nativeElement, label);
      this.neighborhoodIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorNeighborhood.nativeElement, label);
      this.neighborhoodIsValid = false;
    }
  }

  changeInputCity(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputCity = valueInput;

    if(valueInput.length > 0){
      this.changeInputToBlack(input, this.spanErrorCity.nativeElement, label);
      this.cityIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorCity.nativeElement, label);
      this.cityIsValid = false;
    }
  }

  onChangeState(e: Event, label: HTMLLabelElement) {
    const selected = e.target as HTMLInputElement;
    const selectValue = selected.value;
    this.selectedState = selectValue;

    if(selectValue.length > 0){
      this.changeInputToBlack(selected, this.spanErrorState.nativeElement, label);
      this.stateIsValid = true;
    }else {
      this.changeInputToRed(selected, this.spanErrorState.nativeElement, label);
      this.stateIsValid = false;
    }
  }

  changeInputReferencePoint(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputReferencePoint = valueInput;
    console.log(label);

    // if(valueInput.length > 0){
    //   this.changeInputToBlack(input, this.spanErrorCity.nativeElement, label);
    //   this.cityIsValid = true;
    // }else {
    //   this.changeInputToRed(input, this.spanErrorCity.nativeElement, label);
    //   this.cityIsValid = false;
    // }
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

  validateIfCheckboxIsCheckedAndPasswordAndConfirmPasswordIsEqual () {
    if(this.acceptedNews && this.agreePolitics && this.valueInputPassword === this.valueConfirmPassword){
      this.buttonRegisterAccount.style.backgroundColor = "#000";
      this.buttonRegisterAccount.style.color = "#fff";
      this.buttonRegisterAccount.style.cursor = "pointer";

      this.canClickedRegisterUser = true;
    }else {
      this.buttonRegisterAccount.style.backgroundColor = "rgb(179, 179, 179)";
      this.buttonRegisterAccount.style.color = "rgb(102, 102, 102)";
      this.buttonRegisterAccount.style.cursor = "not-allowed";
      this.canClickedRegisterUser = false;
    }
  }

  verificarSelecao(event: Event, checkbox: string) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    if (checkbox === 'aceitoNovidades') {
      this.acceptedNews = isChecked;
    } else if (checkbox === 'concordoPolitica') {
      this.agreePolitics = isChecked;
    }

    this.validateIfCheckboxIsCheckedAndPasswordAndConfirmPasswordIsEqual();
  }

  setTimeoutId!: number;
  clickRegister = false;

  onClickRegister() {
    if(typeof window === 'undefined')return;
    // this.router.navigate(['/painel-do-cliente']);

    if(!this.canClickedRegisterUser)return;

    let canSendRegister = false;

    if(this.inputNameIsValid && this.lastNameIsValid && this.birthdateIsValid && this.genderIsValid && this.cpfIsValid && this.emailIsValid && this.cellPhoneIsValid){
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

    if(!this.cellPhoneIsValid){
      this.changeInputToRed(this.inputCellphone.nativeElement, this.spanErrorCellPhone.nativeElement, this.labelCellPhone.nativeElement);
    }

    if (!canSendRegister) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if(canSendRegister){
      const objCreate = {
        name: this.valueInputName,
        lastName: this.valueInputLastName,
        birthDate: this.valueInputBirthdate,
        gender: this.selectedGender,
        cpf: this.valueInputCpf,
        email: this.valueInputEmail,
        landline: this.valueInputLandline,
        cellPhone: this.valueInputCellPhone,
        password: this.valueInputPassword,
        userImage: ""
      };

      if(this.clickRegister) return;

      this.userService.createAccount(objCreate).subscribe({
        next: (success) => {
          this.clickRegister = true;

          const userDTO = success.data;
          EncryptedUser(userDTO);

          const userLogged: UserLogged = {
            userLoggedWithGoogle: false,
          };

          EncryptedUserLoggedWithGoogle(userLogged);

          this.whereIsComingCustomerPanelAndRegisterUserService.updateUrlName("register");
          this.updateUserService.updateupdateUser(userDTO);

          this.router.navigate(['/painel-do-cliente']);
          // se for com sucesso transferir para a rota "painel-do-cliente" e Passe o data que foi criado agora no "Local Storage"
        },
        error: error => {
          if(error.status === 400){
            console.log(error);
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutId);
  }
}
