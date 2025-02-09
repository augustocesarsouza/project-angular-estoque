import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPanelMainComponent } from './customer-panel-main.component';

describe('CustomerPanelMainComponent', () => {
  let component: CustomerPanelMainComponent;
  let fixture: ComponentFixture<CustomerPanelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPanelMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerPanelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
