import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAllComponent } from './brand-all.component';

describe('BrandAllComponent', () => {
  let component: BrandAllComponent;
  let fixture: ComponentFixture<BrandAllComponent>;

  const spanText = "LE LIS BLANC DEUX";
  const quantity = "248";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandAllComponent);
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
    const a = fixture.nativeElement.querySelector('.container-brand-span-text > a');
    expect(a.textContent.trim()).toBe(spanText);
  });

  it('should render span quantity', () => {
    const span = fixture.nativeElement.querySelector('.container-brand > span');
    expect(span.textContent.trim()).toBe(`(${quantity})`);
  });
});
