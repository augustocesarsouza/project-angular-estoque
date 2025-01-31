import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondComponent } from './header-second.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderSecondComponent', () => {
  let component: HeaderSecondComponent;
  let fixture: ComponentFixture<HeaderSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HeaderSecondComponent],
      // providers: [FlashSaleProductAllInfoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span pix', () => {
    const linkEstoque = fixture.nativeElement.querySelector('.container-link-img-estoque-png > a');
    expect(linkEstoque.textContent).toBe("Estoque Outlet - Loja Oficial");
  });

  it('should render svg microphone', () => {
    const svg = fixture.nativeElement.querySelector('.container-input-search > app-svg-microphone');
    expect(svg).not.toBeNull();
  });

  it('should render inpui search', () => {
    const input = fixture.nativeElement.querySelector('.container-input-search > input');
    expect(input).not.toBeNull();
  });

  it('should render icon-account', () => {
    const icon = fixture.nativeElement.querySelector('.icon-account');
    expect(icon).not.toBeNull();
  });

  it('should render icon-favorite', () => {
    const icon = fixture.nativeElement.querySelector('.icon-favorite');
    expect(icon).not.toBeNull();
  });

  it('should render icon-bag', () => {
    const icon = fixture.nativeElement.querySelector('.icon-bag');
    expect(icon).not.toBeNull();
  });

  it('should render span-account-header', () => {
    const span = fixture.nativeElement.querySelector('.span-account-header');
    expect(span.textContent).toBe("Conta");
  });

  it('should render icon-favorite', () => {
    const span = fixture.nativeElement.querySelector('.span-favorite-header');
    expect(span.textContent).toBe("Favoritos");
  });

  it('should render icon-bag', () => {
    const span = fixture.nativeElement.querySelector('.span-bag-header');
    expect(span.textContent).toBe("Sacola");
  });

  // it('should render two link', () => {
  //   const links = fixture.nativeElement.querySelectorAll('.container-help-store > a');
  //   expect(links.length).toEqual(2);
  // });
});
