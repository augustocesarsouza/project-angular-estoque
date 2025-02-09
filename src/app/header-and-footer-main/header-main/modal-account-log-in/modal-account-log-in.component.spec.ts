import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountLogInComponent } from './modal-account-log-in.component';

describe('ModalAccountLogInComponent', () => {
  let component: ModalAccountLogInComponent;
  let fixture: ComponentFixture<ModalAccountLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAccountLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAccountLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
