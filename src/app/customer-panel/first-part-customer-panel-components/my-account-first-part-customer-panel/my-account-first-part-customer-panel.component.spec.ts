import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountFirstPartCustomerPanelComponent } from './my-account-first-part-customer-panel.component';

describe('MyAccountFirstPartCustomerPanelComponent', () => {
  let component: MyAccountFirstPartCustomerPanelComponent;
  let fixture: ComponentFixture<MyAccountFirstPartCustomerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountFirstPartCustomerPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAccountFirstPartCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
