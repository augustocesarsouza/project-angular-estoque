import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddressUserComponent } from './view-address-user.component';

describe('ViewAddressUserComponent', () => {
  let component: ViewAddressUserComponent;
  let fixture: ComponentFixture<ViewAddressUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAddressUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAddressUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
