import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../../interface-entity/user';
import { CepService } from '../../../../../login-and-register-new-account/service/cep.service';
import { AddressUserService } from '../../../../../services-backend/address-user.service';
import { UserLocalStorage } from '../../../../../function-user/get-user-local-storage/user-local-storage';
import { UserAddress } from '../../../../../interface-entity/user-address';

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
  selector: 'app-modal-new-address',
  templateUrl: './modal-new-address.component.html',
  styleUrl: './modal-new-address.component.scss'
})
export class ModalNewAddressComponent implements OnInit, AfterViewInit, OnDestroy {
  token: string | null = null;
  user!: User;

  clickedEditAddress = false;

  showNumberOfTheUser = false;
  onMouseEnterOnMouseLeaveContainerNumberPhone = false;

  settimeOutArray: number[] = [];
  inputNumberTelephone!: HTMLInputElement;

  NameFullError: null | boolean = null;
  NumberPhoneError: null | boolean = null;
  cpfError: null | boolean = null;
  stateCityError: null | boolean = null;
  neighborhoodError: null | boolean = null;
  streetAvenueError: null | boolean = null;
  numberError: null | boolean = null;

  cpfInvalid = false;

  @ViewChild('divContainerInputNameFull') divContainerInputNameFull!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerNumberPhone') divContainerNumberPhone!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerCep') divContainerCep!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerStateCity') divContainerStateCity!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerNeighborhood') divContainerNeighborhood!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerStreetAvenue') divContainerStreetAvenue!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerNumber') divContainerNumber!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerComplementReferences') divContainerComplementReferences!: ElementRef<HTMLDivElement>;

  @ViewChild('inputNameFull') inputNameFull!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNumberPhone') inputNumberPhone!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCep') inputCep!: ElementRef<HTMLInputElement>;
  @ViewChild('inputStateCity') inputStateCity!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNeighborhood') inputNeighborhood!: ElementRef<HTMLInputElement>;
  @ViewChild('inputStreetAvenue') inputStreetAvenue!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNumber') inputNumber!: ElementRef<HTMLInputElement>;
  @ViewChild('inputComplementReferences') inputComplementReferences!: ElementRef<HTMLInputElement>;

  @ViewChild('divNameInput') divNameInput!: ElementRef<HTMLDivElement>;
  @ViewChild('divNumberPhone') divNumberPhone!: ElementRef<HTMLDivElement>;
  @ViewChild('divCep') divCep!: ElementRef<HTMLDivElement>;
  @ViewChild('divStateCity') divStateCity!: ElementRef<HTMLDivElement>;
  @ViewChild('divNeighborhood') divNeighborhood!: ElementRef<HTMLDivElement>;
  @ViewChild('divStreetAvenue') divStreetAvenue!: ElementRef<HTMLDivElement>;
  @ViewChild('divNumber') divNumber!: ElementRef<HTMLDivElement>;
  @ViewChild('divComplementReferences') divComplementReferences!: ElementRef<HTMLDivElement>;

  @ViewChild('containerSaveHome') containerSaveHome!: ElementRef<HTMLDivElement>;
  @ViewChild('containerSaveWork') containerSaveWork!: ElementRef<HTMLDivElement>;

  @Input() changeValueNewAddress!: (newAddress: boolean) => void;
  @Input() createNewAddress!: (newAddress: UserAddress) => void;
  @Input() updateArrayAddress!: (newAddress: UserAddress) => void;
  @Input() addressEdit!: UserAddress | null;

  stateCity = "";

  whichWasClickedSaveAs = -1;

  estadosBrasil: Record<string, string> = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraima",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins"
  };

  constructor(private cepService: CepService, private addressService: AddressUserService, private router: Router){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };


    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      console.log(user);

      if(user === null) return;

      this.token = user.token;
      this.user = user;
      // this.findByIdOnly(user);
    }

    if(this.addressEdit){
      this.NumberPhoneError = false;
      this.NameFullError = false;
      this.cpfError = false;
      this.neighborhoodError = false;
      this.streetAvenueError = false;
      this.numberError = false;
    }
  }

  ngAfterViewInit(): void {
    const value: number = setTimeout(() => {
      const inputNumberTelephone = document.getElementById("input-number-telephone") as HTMLInputElement;
      this.inputNumberTelephone = inputNumberTelephone;

      const inputCepNewAddress = document.getElementById("input-cep-new-address") as HTMLInputElement;
      const inputNumber = document.getElementById("input-number") as HTMLInputElement;

      this.inputStateCity.nativeElement.classList.add("input-state-city-readonly");
      this.inputStateCity.nativeElement.readOnly = true;
      this.inputStateCity.nativeElement.style.cursor = "text";

      this.inputStateCity.nativeElement.addEventListener("focus", (event) => {
        event.preventDefault();
      });

      if(inputNumberTelephone){
        const mask = Inputmask({
          mask: '(+99) 99 99999 9999',
          placeholder: '(+__) __ _____ ____',
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputNumberTelephone);
      }

      if(inputCepNewAddress){
        const mask = Inputmask({
          mask: '99999-999',
          placeholder: '_____-___',
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputCepNewAddress);
      }

      if (inputNumber) {
        const mask = Inputmask({
          mask: '9999999999',
          placeholder: '',
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputNumber);
      }
    }, 50) as unknown as number;

    this.settimeOutArray.push(value);

    if(this.addressEdit){
      this.divNameInput.nativeElement.style.display = 'block';
      this.divNumberPhone.nativeElement.style.display = 'block';
      this.divCep.nativeElement.style.display = 'block';
      this.divStateCity.nativeElement.style.display = 'block';
      this.divNeighborhood.nativeElement.style.display = 'block';
      this.divStreetAvenue.nativeElement.style.display = 'block';
      this.divNumber.nativeElement.style.display = 'block';

      this.whichWasClickedSaveAs = this.addressEdit.saveAs;

      if(this.addressEdit.saveAs === 0){
        this.containerSaveHome.nativeElement.style.borderColor = "#ee4d2d";
        this.containerSaveHome.nativeElement.style.color = "rgb(238, 77, 45)";
      }else if(this.addressEdit.saveAs === 1){
        this.containerSaveWork.nativeElement.style.borderColor = "#ee4d2d";
        this.containerSaveWork.nativeElement.style.color = "rgb(238, 77, 45)";
      }

      if(this.addressEdit.complement.length > 0){
        this.divComplementReferences.nativeElement.style.display = 'block';
      }
    }
  }

  onClickSaveHome = (containerSaveHome: HTMLDivElement) => {
    if(this.whichWasClickedSaveAs === 0){
      containerSaveHome.style.borderColor = "rgba(0, 0, 0, 0.09)";
      containerSaveHome.style.color = "rgba(0, 0, 0, 0.42)";
      this.whichWasClickedSaveAs = -1;
    }else {
      this.whichWasClickedSaveAs = 0;
      containerSaveHome.style.borderColor = "#ee4d2d";
      containerSaveHome.style.color = "rgb(238, 77, 45)";
    }

    this.containerSaveWork.nativeElement.style.borderColor = "rgba(0, 0, 0, 0.09)";
    this.containerSaveWork.nativeElement.style.color = "rgba(0, 0, 0, 0.42)";
  }

  onClickSaveWork = (containerSaveWork: HTMLDivElement) => {
    if(this.whichWasClickedSaveAs === 1){
      containerSaveWork.style.borderColor = "rgba(0, 0, 0, 0.09)";
      containerSaveWork.style.color = "rgba(0, 0, 0, 0.42)";
      this.whichWasClickedSaveAs = -1;
    }else {
      this.whichWasClickedSaveAs = 1;
      containerSaveWork.style.borderColor = "#ee4d2d";
      containerSaveWork.style.color = "rgb(238, 77, 45)";
    }

    this.containerSaveHome.nativeElement.style.borderColor = "rgba(0, 0, 0, 0.09)";
    this.containerSaveHome.nativeElement.style.color = "rgba(0, 0, 0, 0.42)";
  }

  onClickCancelNewAddress = () => {
    this.addressEdit = null;
    this.changeValueNewAddress(false);
  }

  onClickSendToDb = () => {
    // addressEdit -> se for diferente de null é porque é para editar então nao é criar e atualizar no DB

    this.changeColorContainer(this.divContainerInputNameFull.nativeElement);
    this.changeColorContainer(this.divContainerNumberPhone.nativeElement);
    this.changeColorContainer(this.divContainerCep.nativeElement);

    this.changeColorContainer(this.divContainerNeighborhood.nativeElement);
    this.changeColorContainer(this.divContainerStreetAvenue.nativeElement);
    this.changeColorContainer(this.divContainerNumber.nativeElement);

    if(this.NumberPhoneError === null || this.NameFullError === null || this.cpfError === null ||
       this.neighborhoodError === null || this.streetAvenueError === null || this.numberError === null){
      return;
    };
    if(this.NumberPhoneError === true || this.NameFullError === true || this.cpfError === true ||
       this.neighborhoodError === true || this.streetAvenueError === true || this.numberError === true
    ) {
      return;
    };

    const obj = {
      id: "",
      cep: this.inputCep.nativeElement.value,
      fullName: this.inputNameFull.nativeElement.value,
      street: this.inputStreetAvenue.nativeElement.value,
      numberHome: this.inputNumber.nativeElement.value,
      complement: this.inputComplementReferences.nativeElement.value,
      neighborhood: this.inputNeighborhood.nativeElement.value,
      stateCity: this.inputStateCity.nativeElement.value,
      // state: this.selectedState,
      saveAs: this.whichWasClickedSaveAs,
      phoneNumber: this.inputNumberPhone.nativeElement.value,
      defaultAddress: 0,
      userId: this.user.id,
    };
    console.log(obj);

    if(!this.addressEdit){
      this.addressService.createAddress(obj, this.user).subscribe({
        next: (success) => {
          const address = success.data;

          this.changeValueNewAddress(false);
          this.createNewAddress(address);
        },
        error: error => {
          if(error.status === 400){
            console.log(error);
            // this.confirmEmail = false;
          }

          if(error.status === 403){
            localStorage.removeItem('user');
            this.router.navigate(['/buyer/login']);
            // this.confirmEmail = false;
          }
        }
      });
    }else {
      obj.id = this.addressEdit.id;
      obj.defaultAddress = this.addressEdit.defaultAddress;

      this.addressService.updateAddress(obj, this.user).subscribe({
        next: (success) => {
          const address = success.data;

          this.changeValueNewAddress(false);
          this.updateArrayAddress(address);
        },
        error: error => {
          if(error.status === 400){
            console.log(error);
            // this.confirmEmail = false;
          }

          if(error.status === 403){
            localStorage.removeItem('user');
            this.router.navigate(['/buyer/login']);
            // this.confirmEmail = false;
          }
        }
      });
    }
  }

  onClickInputNumberCelPhone = () => {
    if(this.user.cellPhone.length <= 0) return;

    if(!(this.inputNumberTelephone.value === this.user.cellPhone)){
      this.showNumberOfTheUser = true;
    }

  }

  onClickContainerModalInner = () => {
    if(this.onMouseEnterOnMouseLeaveContainerNumberPhone) return;

    this.showNumberOfTheUser = false;
  }

  onMouseEnterContainerNumberPhone = () => {
    this.onMouseEnterOnMouseLeaveContainerNumberPhone = true;
  }

  onMouseLeaveContainerNumberPhone = () => {
    this.onMouseEnterOnMouseLeaveContainerNumberPhone = false;
  }

  containerShowNumberPhoneUser = (divNumberPhone: HTMLDivElement, divContainerNumberPhone: HTMLDivElement) => {
    this.inputNumberTelephone.value = this.user.cellPhone;

    this.showNumberOfTheUser = false;

    divNumberPhone.style.color = "rgba(0, 0, 0, 0.4)";
    divContainerNumberPhone.style.borderColor = "rgba(0, 0, 0, 0.14)";
    this.NumberPhoneError = false;
  }

  changeInputNameFull(e: Event, divNameInput: HTMLDivElement, divContainerInputNameFull: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 1){
      divNameInput.style.display = 'block';

      divContainerInputNameFull.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.NameFullError = false;
    }else {
      divNameInput.style.display = 'none';

      divContainerInputNameFull.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.NameFullError = true;
    }

    if(input.value.length <= 0){
      this.NameFullError = null;
    }
  }

  changeInputNumberPhone(e: Event, divNumberPhone: HTMLDivElement, divContainerNumberPhone: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    const cleanedValue = input.value.replace(/[()+_\s]/g, '');

    if(cleanedValue.length > 12){
      this.showNumberOfTheUser = false;
      this.NumberPhoneError = false;

      divNumberPhone.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerNumberPhone.style.borderColor = "rgba(0, 0, 0, 0.14)";
    }else {
      if(this.user.cellPhone.length > 0) {
        this.showNumberOfTheUser = true;
      };
      this.NumberPhoneError = true;

      divNumberPhone.style.color = "#ff0000bd";
      divContainerNumberPhone.style.borderColor = "red";
    }

    if(input.value.length > 0){
      divNumberPhone.style.display = 'block';

      if(!(input.value === this.user.cellPhone)){
        if(this.user.cellPhone.length > 0){
          this.showNumberOfTheUser = true;
        }
      }else {
        this.showNumberOfTheUser = false;
      }
    }else {
      divNumberPhone.style.display = 'none';
    }
  }

  async changeInputCep(e: Event, divCep: HTMLDivElement, divContainerCep: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divCep.style.display = 'none';
      divCep.style.color = "#ff0000bd";
      divContainerCep.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.cpfError = true;
    }else {
      divCep.style.display = 'block';

      const valueCep = input.value.replace(/[_]/g, "").replace(/\D/g, '');

      if(valueCep.length < 8){
        this.cpfInvalid = true;
      }

      const json = await this.cepService.consultaCEP(valueCep);

      if(json){
        if(json.erro){
          divCep.style.color = "#ff0000bd";
          divContainerCep.style.borderColor = "red";
          input.classList.add('placeholder-red');

          this.cpfInvalid = true;
          this.cpfError = true;
        }else {
          divCep.style.color = "rgba(0, 0, 0, 0.4)";
          divContainerCep.style.borderColor = "rgba(0, 0, 0, 0.14)";
          input.classList.remove('placeholder-red');

          this.cpfInvalid = false;
          this.cpfError = false;

          const addressValue: AddressCep = json;

          const stateAndCity = `${addressValue.estado} - ${addressValue.localidade}`;

          const inputStateCity = this.inputStateCity.nativeElement as HTMLInputElement;

          inputStateCity.value = stateAndCity;
          inputStateCity.style.color = "#bbb";
          inputStateCity.readOnly = true;
          inputStateCity.style.cursor = "text";

          inputStateCity.addEventListener("focus", (event) => {
            event.preventDefault();
          });

          const firstElementDivStateCity = this.divContainerStateCity.nativeElement.firstChild as HTMLDivElement;
          firstElementDivStateCity.style.display = "block";

          this.inputNeighborhood.nativeElement.value = addressValue.bairro;

          const firstElementDivNeighborhood = this.divContainerNeighborhood.nativeElement.firstChild as HTMLDivElement;
          firstElementDivNeighborhood.style.display = "block";

          firstElementDivNeighborhood.style.color = "rgba(0, 0, 0, 0.4)";
          this.divContainerNeighborhood.nativeElement.style.borderColor = "rgba(0, 0, 0, 0.14)";

          this.neighborhoodError = false;

          this.inputStreetAvenue.nativeElement.value = addressValue.logradouro;

          const firstElementDivStreetAvenue = this.divContainerStreetAvenue.nativeElement.firstChild as HTMLDivElement;
          firstElementDivStreetAvenue.style.display = "block";

          firstElementDivStreetAvenue.style.color = "rgba(0, 0, 0, 0.4)";
          this.divContainerStreetAvenue.nativeElement.style.borderColor = "rgba(0, 0, 0, 0.14)";

          this.streetAvenueError = false;
        }
      }else {
        this.cpfInvalid = true;
        this.cpfError = true;

        divCep.style.color = "#ff0000bd";
        divContainerCep.style.borderColor = "red";
        input.classList.add('placeholder-red');
      }
    }
  }

  changeInputStateCity(e: Event, divStateCity: HTMLDivElement, divContainerStateCity: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divStateCity.style.display = 'none';
      divStateCity.style.color = "#ff0000bd";
      divContainerStateCity.style.borderColor = "red";
      input.classList.add('placeholder-red');
    }else {
      divStateCity.style.display = 'block';

      if(input.value.length < 2){
        divStateCity.style.color = "#ff0000bd";
        divContainerStateCity.style.borderColor = "red";
        input.classList.add('placeholder-red');
      }else {
        divStateCity.style.color = "rgba(0, 0, 0, 0.4)";
        divContainerStateCity.style.borderColor = "rgba(0, 0, 0, 0.14)";
        input.classList.remove('placeholder-red');
      }
    }
  }

  changeInputNeighborhood(e: Event, divNeighborhood: HTMLDivElement, divContainerNeighborhood: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divNeighborhood.style.display = 'none';
      divNeighborhood.style.color = "#ff0000bd";
      divContainerNeighborhood.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.neighborhoodError = true;
    }else {
      divNeighborhood.style.display = 'block';

      if(input.value.length < 2){
        divNeighborhood.style.color = "#ff0000bd";
        divContainerNeighborhood.style.borderColor = "red";
        input.classList.add('placeholder-red');

        this.neighborhoodError = true;
      }else {
        divNeighborhood.style.color = "rgba(0, 0, 0, 0.4)";
        divContainerNeighborhood.style.borderColor = "rgba(0, 0, 0, 0.14)";
        input.classList.remove('placeholder-red');

        this.neighborhoodError = false;
      }
    }
  }

  changeInputStreetAvenue(e: Event, divStreetAvenue: HTMLDivElement, divContainerStreetAvenue: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divStreetAvenue.style.display = 'none';
      divStreetAvenue.style.color = "#ff0000bd";
      divContainerStreetAvenue.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.streetAvenueError = true;
    }else {
      divStreetAvenue.style.display = 'block';

      if(input.value.length < 2){
        divStreetAvenue.style.color = "#ff0000bd";
        divContainerStreetAvenue.style.borderColor = "red";
        input.classList.add('placeholder-red');

        this.streetAvenueError = true;
      }else {
        divStreetAvenue.style.color = "rgba(0, 0, 0, 0.4)";
        divContainerStreetAvenue.style.borderColor = "rgba(0, 0, 0, 0.14)";
        input.classList.remove('placeholder-red');

        this.streetAvenueError = false;
      }
    }
  }

  changeInputNumber(e: Event, divNumber: HTMLDivElement, divContainerNumber: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divNumber.style.display = 'none';
      divNumber.style.color = "#ff0000bd";
      divContainerNumber.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.numberError = true;
    }else {
      divNumber.style.display = 'block';

      divNumber.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerNumber.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.numberError = false;
    }
  }

  changeInputComplementReferences(e: Event, divComplementReferences: HTMLDivElement, divContainerComplementReferences: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 0){
      divComplementReferences.style.display = 'block';

      divComplementReferences.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerComplementReferences.style.borderColor = "rgba(0, 0, 0, 0.14)";
    }else {
      divComplementReferences.style.display = 'none';
    }
  }

  changeColorContainer(divContainer: HTMLDivElement){
    // divNumberPhone.style.color = "#ff0000bd";

    const input = divContainer.lastChild as HTMLInputElement;

    if(input.value.length <= 0){
      divContainer.style.borderColor = "#ff0000bd";
      input.classList.add('placeholder-red');
    }
  }

  ngOnDestroy(): void {
    this.settimeOutArray.forEach((el) => {
      clearTimeout(el);
    })
  }
}
