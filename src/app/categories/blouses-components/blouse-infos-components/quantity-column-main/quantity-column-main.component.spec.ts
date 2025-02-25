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
});
