import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainComponent } from './footer-main.component';

describe('FooterMainComponent', () => {
  let component: FooterMainComponent;
  let fixture: ComponentFixture<FooterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render headers', () => {
    const headers = fixture.nativeElement.querySelectorAll('.container-category > h1');
    expect(headers.length).toEqual(3);

    expect(headers[0].textContent).toBe("Institucional");
    expect(headers[1].textContent).toBe("Ajuda");
    expect(headers[2].textContent).toBe("Conta");
  });

  it('should render all spans', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-category > span');
    expect(spans.length).toEqual(14);
  });

  it('should render header social-estoque', () => {
    const header = fixture.nativeElement.querySelector('.header-social-estoque');

    expect(header.textContent.trim()).toBe("Social #estoqueoutlet");
  });

  it('should render header payment-method', () => {
    const header = fixture.nativeElement.querySelector('.header-payment-method');

    expect(header.textContent.trim()).toBe("Formas de Pagamento");
  });

  it('should render span second footer layer', () => {
    const span = fixture.nativeElement.querySelector('.container-second-footer-layer > span');

    expect(span.textContent.trim()).toBe("2018 Restoque S/A. Todos os direitos reservados - A loja Estoque reserva-se no direito de corrigir ou alterar informações como: preços, promoções e disponibilidade de estoque a qualquer momento. Restoque Comércio e Confecções de Roupas S.A. Rua Othão, 405, Vila Leopoldina, São Paulo, SP, CEP 05313-020 / CNPJ: 49.669.856/0088-02");
  });

  it('should render all header certifications and seals platform', () => {
    const headers = fixture.nativeElement.querySelectorAll('.container-certifications-and-seals-platform > h1');

    expect(headers[0].textContent.trim()).toBe("Certificações e selos");
    expect(headers[1].textContent.trim()).toBe("Plataforma");
  });

  it('should render img certifications and seals platform', () => {
    const img = fixture.nativeElement.querySelector('.container-certifications-and-seals-platform > img');

    expect(img.src).toContain("https://d23fp1w7e5916f.cloudfront.net/Custom/Content/Themes/Estoque/Imagens/Linx+DCG.png");
    expect(img).not.toBeNull();
  });
});
