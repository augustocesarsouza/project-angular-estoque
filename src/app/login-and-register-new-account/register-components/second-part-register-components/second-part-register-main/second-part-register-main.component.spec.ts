import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPartRegisterMainComponent } from './second-part-register-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('SecondPartRegisterMainComponent', () => {
  let component: SecondPartRegisterMainComponent;
  let fixture: ComponentFixture<SecondPartRegisterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [SecondPartRegisterMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPartRegisterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header finish', () => {
    const headerFinish = fixture.nativeElement.querySelector('.header-finish-your-register');
    expect(headerFinish).not.toBeNull();
  });

  it('should render all label', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label') as NodeListOf<HTMLLabelElement>;
    expect(labels.length).toEqual(20);
  });

  it('should render label "name:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[0].textContent.trim()).toBe("* Nome:");
  });

  it('should render label "Sobrenome:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[1].textContent.trim()).toBe("* Sobrenome:");
  });

  it('should render label "Data de Nascimento:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[2].textContent.trim()).toBe("* Data de Nascimento:");
  });

  it('should render label "Sexo:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[3].textContent.trim()).toBe("* Sexo:");
  });

  it('should render label "CPF:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[4].textContent.trim()).toBe("* CPF:");
  });

  it('should render label "E-mail:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[5].textContent.trim()).toBe("* E-mail:");
  });

  it('should render label "Telefone Fixo:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[6].textContent.trim()).toBe("Telefone Fixo:");
  });

  it('should render label "Telefone Celular:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[7].textContent.trim()).toBe("* Telefone Celular:");
  });

  it('should render label "CEP:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[8].textContent.trim()).toBe("*CEP:");
  });

  it('should render label "Titulo (ex.: Casa, Trabalho):"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[9].textContent.trim()).toBe("Titulo *(ex.: Casa, Trabalho):");
  });

  it('should render label "Nome do destinatário:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[10].textContent.trim()).toBe("Nome do destinatário:");
  });

  it('should render label "Endereço:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[11].textContent.trim()).toBe("* Endereço:");
  });

  it('should render label "Número:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[12].textContent.trim()).toBe("* Número:");
  });

  it('should render label "Complemento (opcional):"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[13].textContent.trim()).toBe("Complemento (opcional):");
  });

  it('should render label "Bairro:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[14].textContent.trim()).toBe("* Bairro:");
  });

  it('should render label "Cidade:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[15].textContent.trim()).toBe("* Cidade:");
  });

  it('should render label "Estado:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[16].textContent.trim()).toBe("* Estado:");
  });

  it('should render label "Ponto de referência (opcional):"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[17].textContent.trim()).toBe("Ponto de referência (opcional)");
  });

  it('should render label "Senha:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[18].textContent.trim()).toBe("* Senha:");
  });

  it('should render label "Repita a senha:"', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-input-all > label');
    expect(labels[19].textContent.trim()).toBe("Repita a senha");
  });

  it('should render all Inputs to label', () => {
    const inputs = fixture.nativeElement.querySelectorAll('.container-input-all > input') as NodeListOf<HTMLInputElement>;
    expect(inputs.length).toEqual(18);
  });

  it('should render all select', () => {
    const selects = fixture.nativeElement.querySelectorAll('.container-input-all > select') as NodeListOf<HTMLSelectElement>;
    expect(selects.length).toEqual(2);
  });

  it('should render header address', () => {
    const headerAddAddress = fixture.nativeElement.querySelector('.header-add-address');
    expect(headerAddAddress).not.toBeNull();
  });

  it('should render header register password', () => {
    const headerRegisterPassword = fixture.nativeElement.querySelector('.header-register-password');
    expect(headerRegisterPassword).not.toBeNull();
  });

  it('should render all spans validate password', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans.length).toEqual(5);
  });

  it('should render all spans text content', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans[0].textContent.trim()).toBe("Mínimo 8 caracteres");
  });

  it('should render all spans text content', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans[1].textContent.trim()).toBe("1 letra maíuscula");
  });

  it('should render all spans text content', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans[2].textContent.trim()).toBe("1 letra minúscula");
  });

  it('should render all spans text content', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans[3].textContent.trim()).toBe("1 número");
  });

  it('should render all spans text content', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-info-require-to-register-password > span');
    expect(spans[4].textContent.trim()).toBe("1 caractere especial");
  });

  it('should render labels checkout all twos', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-checkout-confirm-password > label');
    expect(labels.length).toEqual(2);
  });

  it('should render first checkout textContent', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-checkout-confirm-password > label');
    expect(labels[0].textContent.trim()).toBe("Eu aceito receber novidades, promoções e conteúdo Estoque através dos contatos informados");
  });

  it('should render second checkout textContent', () => {
    const labels = fixture.nativeElement.querySelectorAll('.container-checkout-confirm-password > label');
    expect(labels[1].textContent.trim()).toBe("Declaro que li e concordo com a Política de Privacidade da Estoque");
  });

  it('should render button register', () => {
    const button = fixture.nativeElement.querySelector('.container-button-register > button');
    expect(button).not.toBeNull();
  });

  it('should render button register textContent', () => {
    const button = fixture.nativeElement.querySelector('.container-button-register > button');
    expect(button.textContent.trim()).toBe("CADASTRAR");
  });
});
