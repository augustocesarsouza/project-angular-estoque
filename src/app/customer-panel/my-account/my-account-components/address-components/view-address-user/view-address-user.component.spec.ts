import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddressUserComponent } from './view-address-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../../../all-svg/all-svg.module';
import { NameAndPhoneNumberAndButtonEditDeleteComponent } from '../name-and-phone-number-and-button-edit-delete/name-and-phone-number-and-button-edit-delete.component';
import { StreetNumberComplementNeighborhoodAndSetAsDefaultComponent } from '../street-number-complement-neighborhood-and-set-as-default/street-number-complement-neighborhood-and-set-as-default.component';

describe('ViewAddressUserComponent', () => {
  let component: ViewAddressUserComponent;
  let fixture: ComponentFixture<ViewAddressUserComponent>;
  const addressObj = {
    cep: "79083-590",
    complement: "prox escola maria lucia",
    defaultAddress: 1,
    fullName: "Augusto",
    id: "ab0e1b8e-13c0-48d0-a2e8-b01fa2ae48f6",
    neighborhood: "Jardim Aero Rancho",
    numberHome:"2420",
    phoneNumber: "(+23) 23 23132 2323",
    saveAs: 1,
    stateCity: "Mato Grosso do Sul - Campo Grande",
    street: "Rua Cajazeira",
    userId: "3cbdde79-755e-4f24-9445-df81a0bf0a1f",
    userDTO: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAddressUserComponent, NameAndPhoneNumberAndButtonEditDeleteComponent, StreetNumberComplementNeighborhoodAndSetAsDefaultComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAddressUserComponent);
    component = fixture.componentInstance;

    const address = [addressObj];
    component.address = address;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header my address', () => {
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.header-my-address');
    expect(header.textContent.trim()).toBe('Meus Endereços');
  });

  it('should render all buttons edit and delete', () => {
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('.container-button > button');
    expect(buttons.length).toBe(2);

    expect(buttons[0].textContent.trim()).toBe("Editar");
    expect(buttons[1].textContent.trim()).toBe("Excluir");
  });

  it('should render button set as default', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.container-set-as-default-button');

    expect(button.textContent.trim()).toBe("Definir como padrão");
  });

  it('should render button standard', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.container-button-standard');

    expect(button.textContent.trim()).toBe("Padrão");
  });

  it('should render header delete address', () => {
    component.showModalDeleteAddress = true;

    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.container-modal-main > h1');
    expect(header.textContent.trim()).toBe("Excluir endereço?");
  });

  it('should render header delete address', () => {
    component.showModalDeleteAddress = true;

    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('.container-button-cancel-and-delete > button');
    expect(buttons.length).toBe(2);

    expect(buttons[0].textContent.trim()).toBe("CANCELAR");
    expect(buttons[1].textContent.trim()).toBe("EXCLUIR");
  });
});
