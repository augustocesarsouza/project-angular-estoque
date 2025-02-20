import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersFirstPartCustomerPanelComponent } from './my-orders-first-part-customer-panel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('MyOrdersFirstPartCustomerPanelComponent', () => {
  let component: MyOrdersFirstPartCustomerPanelComponent;
  let fixture: ComponentFixture<MyOrdersFirstPartCustomerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [MyOrdersFirstPartCustomerPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrdersFirstPartCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span my orders', () => {
    const span = fixture.nativeElement.querySelector('.span-my-orders');
    expect(span.textContent.trim()).toBe("Meus Pedidos - Auto Atendimento");
  });

  it('should render span requested', () => {
    const span = fixture.nativeElement.querySelector('.span-requested-exchanges-and-returns');
    expect(span.textContent.trim()).toBe("Trocas e Devoluções solicitadas");
  });
});
