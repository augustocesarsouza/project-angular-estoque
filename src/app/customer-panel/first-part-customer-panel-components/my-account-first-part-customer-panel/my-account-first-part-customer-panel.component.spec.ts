import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountFirstPartCustomerPanelComponent } from './my-account-first-part-customer-panel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('MyAccountFirstPartCustomerPanelComponent', () => {
  let component: MyAccountFirstPartCustomerPanelComponent;
  let fixture: ComponentFixture<MyAccountFirstPartCustomerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [MyAccountFirstPartCustomerPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountFirstPartCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span my account', () => {
    const span = fixture.nativeElement.querySelector('.container-my-account-span > span');
    expect(span.textContent.trim()).toBe("Minha Conta");
  });

  it('should render span personal date', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-my-account-sub-section > span');
    expect(spans[0].textContent.trim()).toBe("Dados pessoais");
  });

  it('should render span change password', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-my-account-sub-section > span');
    expect(spans[1].textContent.trim()).toBe("Alterar senha");
  });

  it('should render span address', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-my-account-sub-section > span');
    expect(spans[2].textContent.trim()).toBe("Endereços");
  });
});
