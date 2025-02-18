import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { GoogleApiService } from '../../service/google-api.service';
import { UserService } from '../../../services-backend/user.service';
import { ObjCodeUserEmailToRegisterAccountService } from '../../service/obj-code-user-email-to-register-account.service';
import { LoginPartBottomComponent } from '../login-part-bottom/login-part-bottom.component';

class MockUserService {}
class MockObjCodeUserEmailToRegisterAccountService {}
class MockGoogleApiService {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginComponent, LoginPartBottomComponent],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: ObjCodeUserEmailToRegisterAccountService, useClass: MockObjCodeUserEmailToRegisterAccountService },
        { provide: GoogleApiService, useClass: MockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header already client', () => {
    const header = fixture.nativeElement.querySelector('.header-already-client');
    expect(header.textContent).toBe("Já sou cliente");
  });

  it('should render label email', () => {
    const label = fixture.nativeElement.querySelector('.container-input-email-and-password > label[for="email"]');
    expect(label).toBeTruthy();
    expect(label.textContent.trim()).toBe("E-mail:");
  });

  it('should render label password', () => {
    const label = fixture.nativeElement.querySelector('.container-input-email-and-password > label[for="password"]');
    expect(label).toBeTruthy();
    expect(label.textContent.trim()).toBe("Digite sua senha:");
  });

  it('should render svg eye open', () => {
    const eyeOpen = fixture.nativeElement.querySelector('.container-input-and-eyes > app-svg-eye-close');
    expect(eyeOpen).not.toBeNull();
  });

  it('should render svg eye close', () => {
    component.showEyeOpen = true;
    const eyeClose = fixture.nativeElement.querySelector('.container-input-and-eyes > app-svg-eye-close');
    expect(eyeClose).not.toBeNull();
  });

  it('should render span-forgot-my-password', () => {
    const spanForgotMyPassword = fixture.nativeElement.querySelector('.span-forgot-my-password');
    expect(spanForgotMyPassword).not.toBeNull();
    expect(spanForgotMyPassword.textContent.trim()).toBe("Esqueci minha senha");
  });

  it('should render icon lock', () => {
    const iconLock = fixture.nativeElement.querySelector('.container-enter-input > button > i');
    expect(iconLock).not.toBeNull();
  });

  it('should render button enter', () => {
    const button = fixture.nativeElement.querySelector('.container-enter-input > button');
    expect(button).not.toBeNull();
    expect(button.textContent.trim()).toBe("Entrar");
  });
});
