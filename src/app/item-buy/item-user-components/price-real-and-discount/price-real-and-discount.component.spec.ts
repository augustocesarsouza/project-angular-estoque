import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRealAndDiscountComponent } from './price-real-and-discount.component';

describe('PriceRealAndDiscountComponent', () => {
  let component: PriceRealAndDiscountComponent;
  let fixture: ComponentFixture<PriceRealAndDiscountComponent>;

  const discountPercentage = 20;
  const priceProduct = 100.50;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceRealAndDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceRealAndDiscountComponent);
    component = fixture.componentInstance;

    component.discountPercentage = discountPercentage;
    component.priceProduct = priceProduct;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span discount percentage', () => {
    const span = fixture.nativeElement.querySelector('.span-discount-percentage');
    expect(span.textContent).toBe(`${discountPercentage}% OFF`);
  });

  it('should render span price discount', () => {
    const span = fixture.nativeElement.querySelector('.span-price-discount');
    expect(span.textContent).toBe(`R$ 20,10`);
  });

  it('should render span installment', () => {
    const span = fixture.nativeElement.querySelector('.span-installment');
    expect(span.textContent).toBe(`ou 3x de R$ 6,70`);
  });
});
