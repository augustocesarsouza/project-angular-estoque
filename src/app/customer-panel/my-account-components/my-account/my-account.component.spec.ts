import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header-balance', () => {
    const header = fixture.nativeElement.querySelector('.header-balance-gift-cards');
    expect(header.textContent.trim()).toBe("Saldo em vale-compras");
  });

  it('should render span value balance', () => {
    const span = fixture.nativeElement.querySelector('.span-value-balance');
    expect(span.textContent.trim()).toBe("R$ 0,00");
  });

  it('should render button use balance', () => {
    const button = fixture.nativeElement.querySelector('.button-use-balance');
    expect(button.textContent.trim()).toBe("UTILIZAR SALDO");
  });
});
