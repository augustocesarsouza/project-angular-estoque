import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityColumnMainComponent } from './quantity-column-main.component';

describe('QuantityColumnMainComponent', () => {
  let component: QuantityColumnMainComponent;
  let fixture: ComponentFixture<QuantityColumnMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuantityColumnMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityColumnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span line', () => {
    const spanLine = fixture.nativeElement.querySelector('.span-line-column');
    expect(spanLine).not.toBeNull();
  });

  it('should render spans column first', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-column-first > span');
    expect(spans.length).toBe(4);
  });

  it('should render spans column second', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-column-second > span');
    expect(spans.length).toBe(5);
  });
});
