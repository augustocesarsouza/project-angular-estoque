import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAndReturnComponent } from './exchange-and-return.component';

describe('ExchangeAndReturnComponent', () => {
  let component: ExchangeAndReturnComponent;
  let fixture: ComponentFixture<ExchangeAndReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeAndReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeAndReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header enchange and return', () => {
    const header = fixture.nativeElement.querySelector('.container-enchange-and-return-main > h1');
    expect(header.textContent).toBe("TROCA E DEVOLUÇÕES SOLICITADAS");
  });

  it('should render span none refund', () => {
    const span = fixture.nativeElement.querySelector('.container-enchange-and-return-main > span');
    expect(span.textContent).toBe("Nenhuma devolução");
  });
});
