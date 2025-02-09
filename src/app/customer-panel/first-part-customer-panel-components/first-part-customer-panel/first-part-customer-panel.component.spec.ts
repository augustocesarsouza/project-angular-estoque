import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartCustomerPanelComponent } from './first-part-customer-panel.component';

describe('FirstPartCustomerPanelComponent', () => {
  let component: FirstPartCustomerPanelComponent;
  let fixture: ComponentFixture<FirstPartCustomerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstPartCustomerPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstPartCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
