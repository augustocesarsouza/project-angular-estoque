import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersFirstPartCustomerPanelComponent } from './my-orders-first-part-customer-panel.component';

describe('MyOrdersFirstPartCustomerPanelComponent', () => {
  let component: MyOrdersFirstPartCustomerPanelComponent;
  let fixture: ComponentFixture<MyOrdersFirstPartCustomerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyOrdersFirstPartCustomerPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOrdersFirstPartCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
