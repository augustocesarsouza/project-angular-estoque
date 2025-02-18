import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPasswordValidatePartComponent } from './register-password-validate-part.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('RegisterPasswordValidatePartComponent', () => {
  let component: RegisterPasswordValidatePartComponent;
  let fixture: ComponentFixture<RegisterPasswordValidatePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPasswordValidatePartComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPasswordValidatePartComponent);
    component = fixture.componentInstance;

    component.verificarSelecao = jasmine.createSpy('verificarSelecao');
    component.getSpanMinimumEightCharacter = jasmine.createSpy('getSpanMinimumEightCharacter');
    component.getSpanOneLetterUpperCase = jasmine.createSpy('getSpanOneLetterUpperCase');
    component.getSpanOneLetterLowerCase = jasmine.createSpy('getSpanOneLetterLowerCase');
    component.getSpanMinimumOneNumber = jasmine.createSpy('getSpanMinimumOneNumber');
    component.getSpanOneSpecialCharacter = jasmine.createSpy('getSpanOneSpecialCharacter');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all span info require to register password', () => {
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans.length).toBe(5);
  });

  it('should render all label text', () => {
    fixture.detectChanges();

    const labels = fixture.nativeElement.querySelectorAll('.container-checkout-confirm-password > label');
    expect(labels[0].textContent.trim()).toBe("Eu aceito receber novidades, promoções e conteúdo Estoque através dos contatos informados");
    expect(labels[1].textContent.trim()).toBe("Declaro que li e concordo com a Política de Privacidade da Estoque");
  });
});
