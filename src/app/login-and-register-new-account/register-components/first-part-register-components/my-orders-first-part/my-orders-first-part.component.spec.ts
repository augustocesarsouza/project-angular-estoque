import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersFirstPartComponent } from './my-orders-first-part.component';

describe('MyOrdersFirstPartComponent', () => {
  let component: MyOrdersFirstPartComponent;
  let fixture: ComponentFixture<MyOrdersFirstPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyOrdersFirstPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrdersFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon my orders', () => {
    const icon = fixture.nativeElement.querySelector('.container-svg-and-my-orders > i');
    expect(icon).not.toBeNull();
  });

  it('should render span my oders', () => {
    const span = fixture.nativeElement.querySelector('.container-svg-and-my-orders > span');
    expect(span.textContent.trim()).toBe("Meus Pedidos - Auto Atendimento");
  });

  it('should render span inner info about my oders', () => {
    const span = fixture.nativeElement.querySelector('.container-info-about-my-orders > span');
    expect(span.textContent.trim()).toBe("Trocas e Devoluções solicitadas");
  });
});
