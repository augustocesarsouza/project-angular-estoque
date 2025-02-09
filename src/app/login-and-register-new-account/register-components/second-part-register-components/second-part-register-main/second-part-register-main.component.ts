import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import Inputmask from 'inputmask';
import { CepService } from '../../../service/cep.service';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';
import CryptoJS from 'crypto-js';
import { WhereIsComingCustomerPanelAndRegisterUserService } from '../../../service/where-is-coming-customer-panel-and-register-user.service';
import { UserService } from '../../../../services-backend/user.service';

interface AllStates {
  state: string;
  sigla: string;
}

interface AddressCep {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
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

  @ViewChild('spanMinimumEightCharacter') spanMinimumEightCharacter!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneLetterUpperCase') spanOneLetterUpperCase!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneLetterLowerCase') spanOneLetterLowerCase!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanMinimumOneNumber') spanMinimumOneNumber!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneSpecialCharacter') spanOneSpecialCharacter!: ElementRef<HTMLSpanElement>;

  @ViewChild('spanConfirmPasswordIsNotEqualPassword') spanConfirmPasswordIsNotEqualPassword!: ElementRef<HTMLSpanElement>;

  valueInputPassword = "#";
  valueConfirmPassword = "@";

  inputNameIsValid = false;
  lastNameIsValid = false;
  birthdateIsValid = false;
  genderIsValid = false;
  cpfIsValid = false;
  emailIsValid = false;
  // landlineIsValid = false;
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
  @ViewChild('inputCep') inputCep!: ElementRef<HTMLInputElement>;
  @ViewChild('inputTitle') inputTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('inputAddress') inputAddress!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNumberHome') inputNumberHome!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNeighborhood') inputNeighborhood!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCity') inputCity!: ElementRef<HTMLInputElement>;
  @ViewChild('inputComplementOptional') inputComplementOptional!: ElementRef<HTMLInputElement>;
  @ViewChild('selectStates') selectStates!: ElementRef<HTMLInputElement>;
  @ViewChild('buttonRegisterAccount') buttonRegisterAccount!: ElementRef<HTMLButtonElement>;

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
  valueInputTitle = "";
  valueInputRecipientName = "";
  valueInputAddress = "";
  valueInputNumberHome = "";
  valueInputComplementOptional = "";
  valueInputNeighborhood = "";
  valueInputCity = "";
  valueInputReferencePoint = "";

  selectedGender = '';
  selectedState = '';

  constructor(private cepService: CepService, private userService: UserService, private router: Router,
    private whereIsComingCustomerPanelAndRegisterUserService: WhereIsComingCustomerPanelAndRegisterUserService
  ){}

  ngOnInit(): void {
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
    const inputCep = this.inputCep.nativeElement;
    const inputNumberHome = this.inputNumberHome.nativeElement;

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
        mask: '(99) 99999-9999',
        placeholder: "(__) _____-____",
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputCellphone);
    }

    if(inputCep){
      const mask = Inputmask({
        mask: '99999-999',
        placeholder: "_____-___",
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputCep);
    }

    if(inputNumberHome){
      const mask = Inputmask({
        mask: '99999999',
        placeholder: "",
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputNumberHome);
    }
  }

  async changeInputCep(e: Event, divCep: HTMLDivElement, label: HTMLLabelElement){
    const input = e.target as HTMLInputElement;
    const valueCep = input.value.replace(/[_]/g, "").replace(/\D/g, '');
    this.valueInputCep = input.value;

    if(valueCep.length <= 0){
      input.style.borderColor = "red";
      input.style.color = "red";
      label.style.color = "red";
      this.spanErrorCep.nativeElement.style.display = "flex";

      this.cepIsValid = false;
    }else {
      input.style.borderColor = "rgba(115, 115, 115, 0.2784313725)";
      input.style.color = "black";
      label.style.color = "black";

      if(valueCep.length < 8){
        this.cepIsValid = false;
      }

      const json = await this.cepService.consultaCEP(valueCep);

      if(json){
        if(json.erro){
          input.style.borderColor = "red";
          input.style.color = "red";
          label.style.color = "red";
          this.spanErrorCep.nativeElement.style.display = "flex";

          this.cepIsValid = false;
        }else {
          input.style.borderColor = "rgba(115, 115, 115, 0.2784313725)";
          input.style.color = "black";
          label.style.color = "black";
          this.spanErrorCep.nativeElement.style.display = "none";

          this.cepIsValid = true;

          const addressValue: AddressCep = json;
          this.inputAddress.nativeElement.value = addressValue.logradouro;
          this.inputComplementOptional.nativeElement.value = addressValue.complemento;
          this.inputNeighborhood.nativeElement.value = addressValue.bairro;
          this.inputCity.nativeElement.value = addressValue.localidade;

          this.changeInputToBlack(this.inputAddress.nativeElement, this.spanErrorAddress.nativeElement, this.labelAddress.nativeElement);
          this.changeInputToBlack(this.inputNeighborhood.nativeElement, this.spanErrorNeighborhood.nativeElement, this.labelNeighborhood.nativeElement);
          this.changeInputToBlack(this.inputCity.nativeElement, this.spanErrorCity.nativeElement, this.labelCity.nativeElement);
          this.changeInputToBlack(this.selectStates.nativeElement, this.spanErrorState.nativeElement, this.labelState.nativeElement);

          this.addressIsValid = true;
          this.neighborhoodIsValid = true;
          this.cityIsValid = true;
          this.stateIsValid = true;

          // this.selectStates.nativeElement.value = addressValue.estado;

          const selectElement = this.selectStates.nativeElement;
          selectElement.value = addressValue.uf;

          this.selectedState = addressValue.uf;
          this.valueInputNeighborhood = addressValue.bairro;
          this.valueInputCity = addressValue.localidade;
          this.valueInputAddress = addressValue.logradouro;

          console.log(addressValue);
        }
      }else {
        input.style.borderColor = "red";
        input.style.color = "red";
        label.style.color = "red";
        this.spanErrorCep.nativeElement.style.display = "flex";

        this.cepIsValid = false;
      }
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

  changeInputTitle(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputTitle = valueInput;
    if(valueInput.length > 0){
      this.changeInputToBlack(input, this.spanErrorTitle.nativeElement, label);
      this.titleIsValid = true;
    }else {
      this.changeInputToRed(input, this.spanErrorTitle.nativeElement, label);
      this.titleIsValid = false;
    }
  }

  changeInputRecipientName(e: Event, label: HTMLLabelElement) {
    const input = e.target as HTMLInputElement;
    const valueInput = input.value;
    this.valueInputRecipientName = valueInput;
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

  onClickRegister() {
    if(typeof window === 'undefined')return;
    this.router.navigate(['/painel-do-cliente']);

    if(!this.canClickedRegisterUser)return;

    let canSendRegister = false;

    if(this.inputNameIsValid && this.lastNameIsValid && this.birthdateIsValid && this.genderIsValid && this.cpfIsValid && this.emailIsValid && this.cellPhoneIsValid && this.cepIsValid && this.titleIsValid && this.addressIsValid && this.numberHomeIsValid && this.neighborhoodIsValid && this.cityIsValid && this.stateIsValid){
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

    if(!this.cepIsValid){
      this.changeInputToRed(this.inputCep.nativeElement, this.spanErrorCep.nativeElement, this.labelCep.nativeElement);
    }

    if(!this.titleIsValid){
      this.changeInputToRed(this.inputTitle.nativeElement, this.spanErrorTitle.nativeElement, this.labelTitle.nativeElement);
    }

    if(!this.addressIsValid){
      this.changeInputToRed(this.inputAddress.nativeElement, this.spanErrorAddress.nativeElement, this.labelAddress.nativeElement);
    }

    if(!this.numberHomeIsValid){
      this.changeInputToRed(this.inputNumberHome.nativeElement, this.spanErrorNumberHome.nativeElement, this.labelNumberHome.nativeElement);
    }

    if(!this.neighborhoodIsValid){
      this.changeInputToRed(this.inputNeighborhood.nativeElement, this.spanErrorNeighborhood.nativeElement, this.labelNeighborhood.nativeElement);
    }

    if(!this.cityIsValid){
      this.changeInputToRed(this.inputCity.nativeElement, this.spanErrorCity.nativeElement, this.labelCity.nativeElement);
    }

    if(!this.stateIsValid){
      this.changeInputToRed(this.selectStates.nativeElement, this.spanErrorState.nativeElement, this.labelState.nativeElement);
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
        userAddressCreateValidatorDTO: {
            cep: this.valueInputCep,
            title: this.valueInputTitle,
            recipientName: this.valueInputRecipientName,
            address: this.valueInputAddress,
            numberHome: this.valueInputNumberHome,
            complement: this.valueInputComplementOptional,
            neighborhood: this.valueInputNeighborhood,
            city: this.valueInputCity,
            state: this.selectedState,
            referencePoint: this.valueInputReferencePoint,
            userId: ""
        },
        userImage: ""
      };

      this.userService.createAccount(objCreate).subscribe({
        next: (success) => {
          const userDTO = success.data;

          const secretKey = environment.angularAppSecretKeyUser;

          const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userDTO), secretKey).toString();

          localStorage.setItem('user', encrypted);
          this.whereIsComingCustomerPanelAndRegisterUserService.updateUrlName("register");

          this.setTimeoutId = setTimeout(() => {
            this.router.navigate(['/painel-do-cliente']);
          }, 500)as unknown as number;
          // se for com sucesso transferir para a rota "painel-do-cliente" e Passe o data que foi criado agora no "Local Storage"
        },
        error: error => {
          if(error.status === 400){
            console.log(error);
          }
        }
      });

      console.log(objCreate);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutId);
  }
}
