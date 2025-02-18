import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRegisterComponent } from './button-register.component';

describe('ButtonRegisterComponent', () => {
  let component: ButtonRegisterComponent;
  let fixture: ComponentFixture<ButtonRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRegisterComponent);
    component = fixture.componentInstance;

    component.onClickRegister = jasmine.createSpy('onClickRegister');
    component.getButtonRegisterAccount = jasmine.createSpy('getButtonRegisterAccount');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button register', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.container-button-register > button');
    expect(button.textContent.trim()).toBe('CADASTRAR');
  });
});
