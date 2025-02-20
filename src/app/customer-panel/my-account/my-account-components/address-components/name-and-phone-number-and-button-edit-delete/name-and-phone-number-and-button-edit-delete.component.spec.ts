import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndPhoneNumberAndButtonEditDeleteComponent } from './name-and-phone-number-and-button-edit-delete.component';

describe('NameAndPhoneNumberAndButtonEditDeleteComponent', () => {
  let component: NameAndPhoneNumberAndButtonEditDeleteComponent;
  let fixture: ComponentFixture<NameAndPhoneNumberAndButtonEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameAndPhoneNumberAndButtonEditDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameAndPhoneNumberAndButtonEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
