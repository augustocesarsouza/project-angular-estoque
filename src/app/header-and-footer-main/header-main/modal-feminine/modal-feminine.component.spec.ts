import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFeminineComponent } from './modal-feminine.component';

describe('ModalFeminineComponent', () => {
  let component: ModalFeminineComponent;
  let fixture: ComponentFixture<ModalFeminineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFeminineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFeminineComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalFeminine = jasmine.createSpy('getContainerModalFeminine');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all spans', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h1 span');
    expect(spans.length).toBe(10);
  });

  it('should render spans clothes', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h1 span');

    expect(spans[0].textContent).toBe("ROUPAS");
    expect(spans[1].textContent).toBe("Ver tudo");
  });

  it('should render spans accessories', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h1 span');

    expect(spans[2].textContent).toBe("ACESSÓRIOS");
    expect(spans[3].textContent).toBe("Ver tudo");
  });

  it('should render spans shoes', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h1 span');

    expect(spans[4].textContent).toBe("SAPATOS");
    expect(spans[5].textContent).toBe("Ver tudo");
  });

  it('should render spans underwear', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h1 span');

    expect(spans[6].textContent).toBe("UNDERWEAR");
    expect(spans[7].textContent).toBe("Ver tudo");
  });

  it('should render spans beach', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h1 span');

    expect(spans[8].textContent).toBe("PRAIA");
    expect(spans[9].textContent).toBe("Ver tudo");
  });

  it('should render buy by price', () => {
    const header = fixture.nativeElement.querySelector('.header-buy-by-price');

    expect(header.textContent).toBe("COMPRE POR PREÇO");
  });

  it('should render h4 spans values', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-each-category-inner-feminine > h4 span');
    expect(spans.length).toBe(40);
  });

  it('should render span clothes inner', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-clothes-section-inner');
    expect(spansSections.length).toBe(9);
  });

  it('should render all clothes section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-clothes-section-inner');
    const expectedSpans = ['Blusa', 'Calça', 'Camisa', 'Camiseta', 'Casacos, Jaquetas e Blazers', 'Macacão', 'Saia', 'Shorts', 'Vestido'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all accessories section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-accessories-section-inner');
    const expectedSpans = ['Bolsa', 'Brinco', 'Chapéu e Viseira', 'Cinto', 'Colar', 'Lenço e Xale', 'Pulseira'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all shoe section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-shoes-section-inner');
    const expectedSpans = ['Bota', 'Chinelo', 'Mocassim', 'Sandália', 'Sapatilha', 'Scarpin', 'Tênis', 'Rasteiras'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all underwear section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-underwear-section-inner');
    const expectedSpans = ['Body underwear', 'Calcinha', 'Meia', 'Sutiã', 'Top underwear'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all beach section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-beach-section-inner');
    const expectedSpans = ['Biquíni', 'Maiô', 'Body', 'Calcinha', 'Saída de Praia', 'Top'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all buy-by-price section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-buy-by-price-section-inner');
    const expectedSpans = ['Até R$ 99', 'Até R$ 199', 'Até R$ 299', 'Até R$ 399', 'A partir de R$ 400'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render img-content', () => {
    const img = fixture.nativeElement.querySelector('.img-content');

    expect(img).not.toBeNull();
    expect(img.src).toContain("https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/48/48_banner638730496256041425.webp");
    expect(img.alt).toBe("img-content");
  });
});
