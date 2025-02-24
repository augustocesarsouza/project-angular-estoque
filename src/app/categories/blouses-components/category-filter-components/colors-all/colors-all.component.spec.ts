import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsAllComponent } from './colors-all.component';

describe('ColorsAllComponent', () => {
  let component: ColorsAllComponent;
  let fixture: ComponentFixture<ColorsAllComponent>;

  const spanText = "AMARELO";
  const quantity = "5";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsAllComponent);
    component = fixture.componentInstance;

    component.color = "#ffff00";
    component.spanText = spanText;
    component.quantity = quantity;
    component.indexApp = "0";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div container color', () => {
    const div = fixture.nativeElement.querySelector('.container-color-span-text > div');
    expect(div).not.toBeNull();
  });

  it('should render link textContent', () => {
    const a = fixture.nativeElement.querySelector('.container-color-span-text > a');
    expect(a.textContent.trim()).toBe(spanText);
  });

  it('should render span quantity', () => {
    const span = fixture.nativeElement.querySelector('.container-color > span');
    expect(span.textContent.trim()).toBe(`(${quantity})`);
  });
});
