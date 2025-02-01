import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountComponent } from './modal-account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { SvgArrowTopComponent } from '../svg-arrow-top/svg-arrow-top.component';

describe('ModalAccountComponent', () => {
  let component: ModalAccountComponent;
  let fixture: ComponentFixture<ModalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalAccountComponent, SvgArrowTopComponent],
       // providers: [FlashSaleProductAllInfoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg arrow top', () => {
    const svg = fixture.nativeElement.querySelector('.svg-arrow-top');
    expect(svg).not.toBeNull();
  });

  it('should render button', () => {
    const button = fixture.nativeElement.querySelector('.button-enter-create-new-account');
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("Entrar / Criar conta");
  });

  it('should render icon my-account', () => {
    const icon = fixture.nativeElement.querySelector('.container-my-account > i');
    expect(icon).not.toBeNull();
  });

  it('should render span my-account', () => {
    const span = fixture.nativeElement.querySelector('.container-my-account > span');
    expect(span.textContent).toBe("Minha conta");
  });

  it('should render icon my-orders', () => {
    const icon = fixture.nativeElement.querySelector('.container-my-orders > i');
    expect(icon).not.toBeNull();
  });

  it('should render span my-orders', () => {
    const span = fixture.nativeElement.querySelector('.container-my-orders > span');
    expect(span.textContent).toBe("Minha pedidos");
  });
});
