import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPartBottomComponent } from './login-part-bottom.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('LoginPartBottomComponent', () => {
  let component: LoginPartBottomComponent;
  let fixture: ComponentFixture<LoginPartBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPartBottomComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPartBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span-forgot-my-password', () => {
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-forgot-my-password');
    expect(span.textContent.trim()).toBe('Esqueci minha senha');
  });

  it('should render button enter input', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.container-enter-input > button');
    expect(button.textContent.trim()).toBe('Entrar');
  });

  it('should render all container-line-white-google', () => {
    fixture.detectChanges();

    const containers = fixture.nativeElement.querySelectorAll('.container-line-white-google');
    expect(containers.length).toBe(2);
  });

  it('should render svg loggin with google', () => {
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('.button-continue-with-google-login > app-svg-google');
    expect(svg).not.toBeNull();
  });

  it('should render button continue with google', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.button-continue-with-google-login');
    expect(button.textContent.trim()).toBe("Continuar com o Google");
  });
});
