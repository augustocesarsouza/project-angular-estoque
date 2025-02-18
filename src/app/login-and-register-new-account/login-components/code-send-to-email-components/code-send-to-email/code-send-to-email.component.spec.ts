import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSendToEmailComponent } from './code-send-to-email.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { PartBottomCodeSendToEmailComponent } from '../part-bottom-code-send-to-email/part-bottom-code-send-to-email.component';

describe('CodeSendToEmailComponent', () => {
  let component: CodeSendToEmailComponent;
  let fixture: ComponentFixture<CodeSendToEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CodeSendToEmailComponent, PartBottomCodeSendToEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSendToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-svg-arrow-register', () => {
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('.container-svg-arrow > app-svg-arrow-register');
    expect(svg).not.toBeNull();
  });

  it('should render span type your code', () => {
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-type-code > span');
    expect(span.textContent.trim()).toBe("Digite o código de verificação");
  });

  it('should render app-code-is-wrong-x', () => {
    component.codeIsWrong = true;
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('.code-is-wrong > app-code-is-wrong-x');
    expect(svg).not.toBeNull();
  });

  it('should render span code verifify', () => {
    component.codeIsWrong = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.code-is-wrong > span');
    expect(span.textContent.trim()).toBe("Código de verificação inválido.");
  });

  it('should render span your code of verifify', () => {
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-your-code-of-verifify');
    expect(span.textContent.trim()).toBe("Seu código de verificação foi enviado por Email para");
  });

  it('should render span your code of verifify', () => {
    const valueEmailPhoneCreate = "augusto@gmail.com";
    component.valueEmailPhoneCreate = valueEmailPhoneCreate;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-phone');
    expect(span.textContent.trim()).toBe(valueEmailPhoneCreate);
  });

  it('should render all inputs code sent to email', () => {
    fixture.detectChanges();

    const inputs = fixture.nativeElement.querySelectorAll('.container-input-code > input');
    expect(inputs.length).toBe(6);
  });
});
