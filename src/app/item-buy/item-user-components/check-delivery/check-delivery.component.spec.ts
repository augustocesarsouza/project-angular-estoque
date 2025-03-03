import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeliveryComponent } from './check-delivery.component';

describe('CheckDeliveryComponent', () => {
  let component: CheckDeliveryComponent;
  let fixture: ComponentFixture<CheckDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img express', () => {
    const imgExpress = fixture.nativeElement.querySelector('.container-img-express');
    expect(imgExpress).not.toBeNull();
  });

  it('should render span link check here', () => {
    const span = fixture.nativeElement.querySelector('.link-check-here');
    expect(span.textContent.trim()).toBe("Confira aqui");
  });

  it('should render span advice', () => {
    const span = fixture.nativeElement.querySelector('.container-span-advice > span');
    expect(span.textContent.trim()).toBe("Importante: Confirme no carrinho se a sua localidade (CEP) é atendida.");
  });
});
