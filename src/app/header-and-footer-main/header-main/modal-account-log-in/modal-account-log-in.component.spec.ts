import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountLogInComponent } from './modal-account-log-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { SvgArrowTopComponent } from '../svg-arrow-top/svg-arrow-top.component';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';

class MockGoogleApiService {}

describe('ModalAccountLogInComponent', () => {
  let component: ModalAccountLogInComponent;
  let fixture: ComponentFixture<ModalAccountLogInComponent>;

  const user = {
    id: "76b6665d-ae61-4120-ac32-1c9db9a7fefd",
    name: "Augusto",
    lastName: "lastName",
    birthDate: "birthDate",
    gender: "gender",
    cpf: "cpf",
    email: "augustocesarsantana90@gmail.com",
    landline: "landline",
    cellPhone: "cellPhone",
    userImage: null,
    confirmEmail: 0,
    token: "asdasd",
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalAccountLogInComponent, SvgArrowTopComponent],
      providers: [
        { provide: GoogleApiService, useClass: MockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAccountLogInComponent);
    component = fixture.componentInstance;

    component.user = user;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all spans', () => {
    const span = fixture.nativeElement.querySelector('.span-user-log-in');
    expect(span.textContent).toBe(`Olá, ${user.name}`);
  });

  it('should render icon my account', () => {
    const icon = fixture.nativeElement.querySelector('.container-my-account > i');
    expect(icon).not.toBeNull();
  });

  it('should render span my account', () => {
    const span = fixture.nativeElement.querySelector('.container-my-account > span');
    expect(span.textContent.trim()).toBe("Minha conta");
  });

  it('should render icon container-my-orders', () => {
    const icon = fixture.nativeElement.querySelector('.container-my-orders > i');
    expect(icon).not.toBeNull();
  });

  it('should render span container-my-orders', () => {
    const span = fixture.nativeElement.querySelector('.container-my-orders > span');
    expect(span.textContent.trim()).toBe("Minha pedidos");
  });

  it('should render icon container-exit-user', () => {
    const icon = fixture.nativeElement.querySelector('.container-exit-user > i');
    expect(icon).not.toBeNull();
  });

  it('should render span container-exit-user', () => {
    const span = fixture.nativeElement.querySelector('.container-exit-user > span');
    expect(span.textContent.trim()).toBe("Sair");
  });
});
