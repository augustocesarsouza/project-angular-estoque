import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReviewsComponent } from './modal-reviews.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ReviewTypeComponent } from '../review-type/review-type.component';

describe('ModalReviewsComponent', () => {
  let component: ModalReviewsComponent;
  let fixture: ComponentFixture<ModalReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, RecaptchaModule],
      declarations: [ModalReviewsComponent, ReviewTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header modal reviews', () => {
    const header = fixture.nativeElement.querySelector('.header-modal-review');
    expect(header.textContent.trim()).toBe("Avalie este produto");
  });

  it('should render all app-review-type', () => {
    const reviewTypes = fixture.nativeElement.querySelectorAll('.container-all-types-reviews > app-review-type');
    expect(reviewTypes.length).toBe(3);
  });

  it('should render name input', () => {
    const inputName = fixture.nativeElement.querySelector('.container-name-input');
    expect(inputName.textContent.trim()).toBe("Nome");
  });

  it('should render input name full', () => {
    const input = fixture.nativeElement.querySelector('#input-name-full');
    expect(input).not.toBeNull();
  });

  it('should render span name full error', () => {
    component.NameFullError = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-name-full-error');
    expect(span.textContent.trim()).toBe("O nome é muito curto. Ele deve ter 2 caracteres ou mais.");
  });

  it('should render email input', () => {
    const inputEmail = fixture.nativeElement.querySelector('.container-email-input');
    expect(inputEmail.textContent.trim()).toBe("E-mail");
  });

  it('should render input email', () => {
    const input = fixture.nativeElement.querySelector('#input-email');
    expect(input).not.toBeNull();
  });

  it('should render span name full error', () => {
    component.EmailError = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-name-full-error');
    expect(span.textContent.trim()).toBe("O E-mail é muito curto. Ele deve ter 2 caracteres ou mais.");
  });

  it('should render review title input', () => {
    const inputEmail = fixture.nativeElement.querySelector('.container-review-title-input');
    expect(inputEmail.textContent.trim()).toBe("Titulo da avaliação");
  });

  it('should render review title', () => {
    const input = fixture.nativeElement.querySelector('#input-review-title');
    expect(input).not.toBeNull();
  });

  it('should render span name full error', () => {
    component.ReviewTitleError = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-name-full-error');
    expect(span.textContent.trim()).toBe("O Titulo da avaliação é muito curto. Ele deve ter 2 caracteres ou mais.");
  });

  it('should render textare review-reviewbody', () => {
    const textarea = fixture.nativeElement.querySelector('#review-reviewbody');
    expect(textarea).not.toBeNull();
  });

  it('should render re captcha', () => {
    const containerRecaptcha = fixture.nativeElement.querySelector('.container-re-captcha');
    expect(containerRecaptcha).not.toBeNull();
  });

  it('should render button submit', () => {
    const button = fixture.nativeElement.querySelector('.button-submit-evaluation');
    expect(button.textContent.trim()).toBe("ENVIAR AVALIAÇÃO");
  });

  it('should render app-svg-exit', () => {
    const svg = fixture.nativeElement.querySelector('.container-modal-main > app-svg-exit');
    expect(svg).not.toBeNull();
  });
});
