import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRealAndDiscountComponent } from './price-real-and-discount.component';

describe('PriceRealAndDiscountComponent', () => {
  let component: PriceRealAndDiscountComponent;
  let fixture: ComponentFixture<PriceRealAndDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceRealAndDiscountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceRealAndDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
