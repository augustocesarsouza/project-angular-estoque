import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetNumberComplementNeighborhoodAndSetAsDefaultComponent } from './street-number-complement-neighborhood-and-set-as-default.component';

describe('StreetNumberComplementNeighborhoodAndSetAsDefaultComponent', () => {
  let component: StreetNumberComplementNeighborhoodAndSetAsDefaultComponent;
  let fixture: ComponentFixture<StreetNumberComplementNeighborhoodAndSetAsDefaultComponent>;

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
      declarations: [StreetNumberComplementNeighborhoodAndSetAsDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetNumberComplementNeighborhoodAndSetAsDefaultComponent);
    component = fixture.componentInstance;

    const address = addressObj;
    component.el = address;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render full address without complement', () => {
    const address = {
      street: "Rua Cajazeira",
      numberHome: "2420",
      complement: "",
      neighborhood: "Jardim Aero Rancho",
      stateCity: "Mato Grosso do Sul - Campo Grande",
      cep: "79083-590",
      defaultAddress: 1,
      fullName: "",
      id: "",
      phoneNumber: "",
      saveAs: 1,
      userId: "",
      userDTO: null
    };
    component.el = address;
    fixture.detectChanges();

    const addressElement = fixture.nativeElement.querySelector('.container-street-number-complement-neighborhood span:first-child');
    expect(addressElement.textContent.trim()).toBe(`${addressObj.street}, ${addressObj.numberHome}, ${addressObj.neighborhood}`);
  });

  it('should render full address with complement', () => {
    fixture.detectChanges();

    const addressElement = fixture.nativeElement.querySelector('.container-street-number-complement-neighborhood span:first-child');
    expect(addressElement.textContent.trim()).toBe(`${addressObj.street}, ${addressObj.numberHome}, ${addressObj.complement}, ${addressObj.neighborhood}`);
  });

  it('should render correct state and cep', () => {
    const address = {
      street: "Rua Cajazeira",
      numberHome: "2420",
      complement: "",
      neighborhood: "Jardim Aero Rancho",
      stateCity: "Mato Grosso do Sul - Campo Grande",
      cep: "79083-590",
      defaultAddress: 1,
      fullName: "",
      id: "",
      phoneNumber: "",
      saveAs: 1,
      userId: "",
      userDTO: null
    };
    component.el = address;
    fixture.detectChanges();

    const stateCepElement = fixture.nativeElement.querySelector('.container-street-number-complement-neighborhood span:last-child');
    expect(stateCepElement.textContent.trim()).toBe('Campo Grande, Mato Grosso do Sul, 79083590');
  });
});
