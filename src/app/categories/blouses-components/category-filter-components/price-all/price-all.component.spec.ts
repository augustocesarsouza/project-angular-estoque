import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAllComponent } from './price-all.component';

describe('PriceAllComponent', () => {
  let component: PriceAllComponent;
  let fixture: ComponentFixture<PriceAllComponent>;

  const spanText = "R$ 0 a R$ 100";
  const quantity = "6";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceAllComponent);
    component = fixture.componentInstance;

    component.spanText = spanText;
    component.quantity = quantity;
    component.indexApp = "0";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render link textContent', () => {
    const a = fixture.nativeElement.querySelector('.container-price-span-text > a');
    expect(a.textContent.trim()).toBe(spanText);
  });

  it('should render span quantity', () => {
    const span = fixture.nativeElement.querySelector('.container-price > span');
    expect(span.textContent.trim()).toBe(`(${quantity})`);
  });
});
