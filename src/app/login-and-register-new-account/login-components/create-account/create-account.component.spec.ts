import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header create account', () => {
    const header = fixture.nativeElement.querySelector('.header-create-account');
    expect(header.textContent.trim()).toBe("Criar conta");
  });

  it('should render spans', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-second-part-create-account > span');
    expect(spans.length).toEqual(2);
    expect(spans[0].textContent.trim()).toBe("Acesse o formulário de cadastro:");
    expect(spans[1].textContent.trim()).toBe("Primeira compra? Cadastre-se agora e receba um cupom de 15% OFF* no seu e-mail!");
  });

  it('should render button register', () => {
    const button = fixture.nativeElement.querySelector('.container-button-register > button');
    expect(button.textContent.trim()).toBe("CADASTRAR");
  });
});
