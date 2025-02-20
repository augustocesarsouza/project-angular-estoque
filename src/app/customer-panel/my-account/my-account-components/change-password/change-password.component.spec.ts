import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { GoogleApiService } from '../../../../login-and-register-new-account/service/google-api.service';
import { UserService } from '../../../../services-backend/user.service';
// import { UpdateUserService } from '../../service/update-user.service';
// import { OAuthService } from 'angular-oauth2-oidc';

class MockGoogleApiService {}
class MockUserService {}
// class MockUpdateUserService {}
// class MockOAuthService {}

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
      providers: [
        { provide: GoogleApiService, useClass: MockGoogleApiService },
        { provide: UserService, useClass: MockUserService }
        // { provide: UpdateUserService, useClass: MockUpdateUserService },
        // { provide: OAuthService, useClass: MockOAuthService },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header change password', () => {
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.header-change-password');
    expect(header.textContent.trim()).toBe('ALTERAR SENHA');
  });

  it('should render label password', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="password"]')
    expect(label.textContent.trim()).toBe('* Digite Sua Sanha Atual:');
  });

  it('should render input password', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#password')
    expect(input).not.toBeNull();
  });

  it('should render span error password actual', () => {
    component.spanErrorPasswordActual.nativeElement.style.display = "flex";
    const span = component.spanErrorPasswordActual.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Senha deve ser maior que 2");
  });

  it('should render span error password informed', () => {
    component.spanErrorPasswordInformed.nativeElement.style.display = "flex";
    const span = component.spanErrorPasswordInformed.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Erro Senha Informada");
  });

  it('should render label password-new', () => {
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label[for="password-new"]')
    expect(label.textContent.trim()).toBe('* Senha:');
  });

  it('should render input password-new', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#password-new')
    expect(input).not.toBeNull();
  });

  it('should render span error corfirm password should be equal password', () => {
    component.spanConfirmPasswordIsNotEqualPassword.nativeElement.style.display = "flex";
    const span = component.spanConfirmPasswordIsNotEqualPassword.nativeElement;

    fixture.detectChanges();

    expect(span.textContent?.trim()).toBe("Repita a senha deve ser igual a senha");
  });

  it('should render all span require to register password', () => {
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span')
    expect(spans.length).toBe(5);

    expect(spans[0].textContent.trim()).toBe("Mínimo 8 caracteres");
    expect(spans[1].textContent.trim()).toBe("1 letra maíuscula");
    expect(spans[2].textContent.trim()).toBe("1 letra minúscula");
    expect(spans[3].textContent.trim()).toBe("1 número");
    expect(spans[4].textContent.trim()).toBe("1 caractere especial");
  });

  it('should render button save', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.button-save-register');
    expect(button).not.toBeNull();
    expect(button.textContent.trim()).toBe('SALVAR');
  });
});
