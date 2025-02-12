import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPanelMainComponent } from './customer-panel-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderAndFooterLoginAndRegisterModule } from '../../header-and-footer-login-and-register/header-and-footer-login-and-register.module';

describe('CustomerPanelMainComponent', () => {
  let component: CustomerPanelMainComponent;
  let fixture: ComponentFixture<CustomerPanelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, HeaderAndFooterLoginAndRegisterModule],
      declarations: [CustomerPanelMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPanelMainComponent);
    component = fixture.componentInstance;
    component.urlName = "register";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header congratulations', () => {
    const header = fixture.nativeElement.querySelector('.container-account-created-successfully > h1');
    expect(header.textContent.trim()).toBe("PARABÉNS");
  });

  it('should render span register successfully', () => {
    const span = fixture.nativeElement.querySelector('.container-account-created-successfully > span');
    expect(span.textContent.trim()).toBe("Seu cadastro foi realizado com sucesso");
  });
});
