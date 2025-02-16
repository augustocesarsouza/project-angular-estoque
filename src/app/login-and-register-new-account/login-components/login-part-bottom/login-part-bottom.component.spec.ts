import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPartBottomComponent } from './login-part-bottom.component';

describe('LoginPartBottomComponent', () => {
  let component: LoginPartBottomComponent;
  let fixture: ComponentFixture<LoginPartBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPartBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPartBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
