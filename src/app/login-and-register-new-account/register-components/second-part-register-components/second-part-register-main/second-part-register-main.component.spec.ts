import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPartRegisterMainComponent } from './second-part-register-main.component';

describe('SecondPartRegisterMainComponent', () => {
  let component: SecondPartRegisterMainComponent;
  let fixture: ComponentFixture<SecondPartRegisterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondPartRegisterMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPartRegisterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
