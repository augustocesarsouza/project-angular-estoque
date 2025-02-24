import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndPhoneNumberAndButtonEditDeleteComponent } from './name-and-phone-number-and-button-edit-delete.component';

describe('NameAndPhoneNumberAndButtonEditDeleteComponent', () => {
  let component: NameAndPhoneNumberAndButtonEditDeleteComponent;
  let fixture: ComponentFixture<NameAndPhoneNumberAndButtonEditDeleteComponent>;

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
      declarations: [NameAndPhoneNumberAndButtonEditDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAndPhoneNumberAndButtonEditDeleteComponent);
    component = fixture.componentInstance;

    const address = addressObj;
    component.el = address;
    component.address = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render full name and phone number', () => {
    fixture.detectChanges();

    const nameElement = fixture.nativeElement.querySelector('.container-name-and-phone-number span:first-child');
    const phoneNumberElement = fixture.nativeElement.querySelector('.container-name-and-phone-number span:last-child');

    expect(nameElement.textContent.trim()).toBe(addressObj.fullName);
    expect(phoneNumberElement.textContent.trim()).toBe(addressObj.phoneNumber);
  });
});
