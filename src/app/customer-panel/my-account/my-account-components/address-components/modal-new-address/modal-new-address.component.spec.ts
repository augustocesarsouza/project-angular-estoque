import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewAddressComponent } from './modal-new-address.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllSvgModule } from '../../../../../all-svg/all-svg.module';
import { User } from '../../../../../interface-entity/user';

describe('ModalNewAddressComponent', () => {
  let component: ModalNewAddressComponent;
  let fixture: ComponentFixture<ModalNewAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewAddressComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the modal', () => {
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-modal-inner span');
    expect(span.textContent.trim()).toBe('Novo Endereço');

    const containerNameInput = fixture.nativeElement.querySelector('.container-name-input');
    expect(containerNameInput.textContent).toBe('Nome Completo');

    const inputNameFull = fixture.nativeElement.querySelector('#input-name-full');
    expect(inputNameFull).not.toBeNull();
  });

  it('should test span name full error', () => {
    component.NameFullError = true;
    fixture.detectChanges();

    const spanNameFullError = fixture.nativeElement.querySelector('.span-name-full-error');
    expect(spanNameFullError.textContent.trim()).toBe('O nome é muito curto. Ele deve ter 2 caracteres ou mais.');
  });

  it('should test span number phone', () => {
    fixture.detectChanges();

    const spanNumberPhone = fixture.nativeElement.querySelector('#number-phone');
    expect(spanNumberPhone.textContent.trim()).toBe('Número de Telefone');
  });

  it('should test input input number telephone', () => {
    fixture.detectChanges();

    const inputNumberTelephone = fixture.nativeElement.querySelector('#input-number-telephone');
    expect(inputNumberTelephone).not.toBeNull();
  });

  it('should test span fill phone valid', () => {
    component.NumberPhoneError = true;
    fixture.detectChanges();

    const spanFillPhoneValid = fixture.nativeElement.querySelector('#fill-phone-valid');
    expect(spanFillPhoneValid.textContent.trim()).toBe('Preencha um telefone válido');
  });

  it('should test container show number phone user', () => {
    const phone = "(+55) 67 98114 5503";
    component.showNumberOfTheUser = true;
    const userObj: User = {
      id: "",
      name: "",
      lastName: "",
      birthDate: "",
      gender: "",
      cpf: "",
      email: "",
      landline: "",
      cellPhone: phone,
      userImage: "",
      confirmEmail: 0,
      token: "asasdsd"
    }

    component.user = userObj;
    fixture.detectChanges();

    const spanNumberPhone = fixture.nativeElement.querySelector('.container-show-number-phone-user span');
    expect(spanNumberPhone.textContent.trim()).toBe(phone);

    const divUse = fixture.nativeElement.querySelector('.container-show-number-phone-user div');
    expect(divUse.textContent.trim()).toBe("Usar");
  });

  it('should test span fill phone valid', () => {
    fixture.detectChanges();

    const divCep = fixture.nativeElement.querySelector('#div-cep');
    expect(divCep.textContent.trim()).toBe('CEP');
  });

  it('should test span cep invalid', () => {
    component.cpfInvalid = true;
    fixture.detectChanges();

    const cepInvalid = fixture.nativeElement.querySelector('#cep-invalid');
    expect(cepInvalid).not.toBeNull();
  });

  it('should test container state city', () => {
    fixture.detectChanges();

    const containerStateCity = fixture.nativeElement.querySelector('#container-state-city');
    expect(containerStateCity).not.toBeNull();
  });

  it('should test container neighborhood', () => {
    fixture.detectChanges();

    const containerNeighborhood = fixture.nativeElement.querySelector('#container-neighborhood-id');
    expect(containerNeighborhood.textContent.trim()).toBe("Bairro");
  });

  it('should test input neighborhood', () => {
    fixture.detectChanges();

    const inputNeighborhood = fixture.nativeElement.querySelector('#input-neighborhood');
    expect(inputNeighborhood).not.toBeNull();
  });

  it('should test container street avenue', () => {
    fixture.detectChanges();

    const containerStreetAvenue = fixture.nativeElement.querySelector('#container-street-avenue');
    expect(containerStreetAvenue.textContent.trim()).toBe("Rua / Avenida");
  });

  it('should test input stree avenue', () => {
    fixture.detectChanges();

    const inputStreetAvenue = fixture.nativeElement.querySelector('#input-street-avenue');
    expect(inputStreetAvenue).not.toBeNull();
  });

  it('should test container number', () => {
    fixture.detectChanges();

    const containerNumber = fixture.nativeElement.querySelector('#container-number');
    expect(containerNumber.textContent.trim()).toBe("Número");
  });

  it('should test input number', () => {
    fixture.detectChanges();

    const inputNumber = fixture.nativeElement.querySelector('#input-number');
    expect(inputNumber).not.toBeNull();
  });

  it('should test container complement references', () => {
    fixture.detectChanges();

    const containerComplementReferences = fixture.nativeElement.querySelector('#container-complement-references');
    expect(containerComplementReferences.textContent.trim()).toBe("Complemento/Referências Próx./Descrição do Prédio");
  });

  it('should test input complement references', () => {
    fixture.detectChanges();

    const inputComplementReferences = fixture.nativeElement.querySelector('#input-complement-references');
    expect(inputComplementReferences).not.toBeNull();
  });

  it('should test span save as', () => {
    fixture.detectChanges();

    const spanSaveAs = fixture.nativeElement.querySelector('.container-save-as span');
    expect(spanSaveAs.textContent.trim()).toBe("Salvar Como:");
  });

  it('should test span home', () => {
    fixture.detectChanges();

    const spanSaveHome = fixture.nativeElement.querySelector('.container-save-home span');
    expect(spanSaveHome.textContent.trim()).toBe("Casa");
  });

  it('should test span work', () => {
    fixture.detectChanges();

    const spanWork = fixture.nativeElement.querySelector('.container-save-work span');
    expect(spanWork.textContent.trim()).toBe("Trabalho");
  });

  it('should test button cancel', () => {
    fixture.detectChanges();

    const buttonCancel = fixture.nativeElement.querySelector('.button-cancel');
    expect(buttonCancel.textContent.trim()).toBe("Cancelar");
  });

  it('should test button cancel', () => {
    fixture.detectChanges();

    const buttonSend = fixture.nativeElement.querySelector('.button-send');
    expect(buttonSend.textContent.trim()).toBe("Enviar");
  });
});
