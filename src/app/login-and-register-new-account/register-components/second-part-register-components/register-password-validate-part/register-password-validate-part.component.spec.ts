import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPasswordValidatePartComponent } from './register-password-validate-part.component';

describe('RegisterPasswordValidatePartComponent', () => {
  let component: RegisterPasswordValidatePartComponent;
  let fixture: ComponentFixture<RegisterPasswordValidatePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPasswordValidatePartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPasswordValidatePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
