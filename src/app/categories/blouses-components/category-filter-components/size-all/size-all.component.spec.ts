import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeAllComponent } from './size-all.component';

describe('SizeAllComponent', () => {
  let component: SizeAllComponent;
  let fixture: ComponentFixture<SizeAllComponent>;

  const spanText = "PP";
  const quantity = "131";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizeAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeAllComponent);
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
    const a = fixture.nativeElement.querySelector('.container-size-span-text > a');
    expect(a.textContent.trim()).toBe(spanText);
  });

  it('should render span quantity', () => {
    const span = fixture.nativeElement.querySelector('.container-size > span');
    expect(span.textContent.trim()).toBe(`(${quantity})`);
  });
});
