import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouWouldLikeReceiverNewsComponent } from './you-would-like-receiver-news.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('YouWouldLikeReceiverNewsComponent', () => {
  let component: YouWouldLikeReceiverNewsComponent;
  let fixture: ComponentFixture<YouWouldLikeReceiverNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [YouWouldLikeReceiverNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouWouldLikeReceiverNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span top header', () => {
    const span = fixture.nativeElement.querySelector('.span-top-header');
    expect(span.textContent.trim()).toBe("Olá! Gostaria de receber novidades em primeira mão e um benefício exclusivo? Inscreva-se!");
  });

  it('should render span floating Nome', () => {
    const div = fixture.nativeElement.querySelectorAll('.container-name-input');
    expect(div[0].textContent.trim()).toBe("Nome");
  });

  it('should render span floating type your email', () => {
    const div = fixture.nativeElement.querySelectorAll('.container-name-input');
    expect(div[1].textContent.trim()).toBe("Digite seu e-mail");
  });

  it('should render input name', () => {
    const inputName = fixture.nativeElement.querySelector('#input-name');
    expect(inputName).not.toBeNull();
  });

  it('should render span name full error', () => {
    component.NameFullError = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-name-full-error');
    expect(span.textContent.trim()).toBe("O nome é muito curto. Ele deve ter 2 caracteres ou mais.");
  });

  it('should render input type you', () => {
    const inputTypeYou = fixture.nativeElement.querySelector('#input-type-you');
    expect(inputTypeYou).not.toBeNull();
  });

  it('should render span email invalid', () => {
    component.YourEmailFullError = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-name-full-error');
    expect(span.textContent.trim()).toBe("Email inválido");
  });

  it('should render button register', () => {
    const button = fixture.nativeElement.querySelector('.button-register');
    expect(button.textContent.trim()).toBe("INSCREVA-SE");
  });

  it('should render checkbox', () => {
    const inputCheckbox = fixture.nativeElement.querySelector('.container-checkbox > input[type="checkbox"]');
    expect(inputCheckbox).not.toBeNull();
  });

  it('should render checkbox', () => {
    const label = fixture.nativeElement.querySelector('.container-checkbox > label');
    expect(label.textContent.trim()).toBe("Aceito receber conteúdos e promoções e estou de acordo com sua Política de Privacidade");
  });
});
