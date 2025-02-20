import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeComponent } from './vale.component';

describe('ValeComponent', () => {
  let component: ValeComponent;
  let fixture: ComponentFixture<ValeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header balance gift cards', () => {
    const header = fixture.nativeElement.querySelector('.header-balance-gift-cards');
    expect(header.textContent).toBe("Saldo em vale-compras");
  });

  it('should render span value balance', () => {
    const span = fixture.nativeElement.querySelector('.span-value-balance');
    expect(span.textContent).toBe("R$ 0,00");
  });

  it('should render header my vale oders', () => {
    const header = fixture.nativeElement.querySelector('.container-my-vale-orders > h1:first-child');
    expect(header.textContent).toBe("MEUS VALES-COMPRAS");
  });

  it('should render header all length my orders th', () => {
    const ths = fixture.nativeElement.querySelectorAll('.table-row-first > th');
    expect(ths.length).toBe(4);
  });

  it('should render all textContent th', () => {
    const ths = fixture.nativeElement.querySelectorAll('.table-row-first > th');
    expect(ths[0].textContent.trim()).toBe("");
    expect(ths[1].textContent.trim()).toBe("Saldo");
    expect(ths[2].textContent.trim()).toBe("Situação");
    expect(ths[3].textContent.trim()).toBe("Ação");
  });
});
