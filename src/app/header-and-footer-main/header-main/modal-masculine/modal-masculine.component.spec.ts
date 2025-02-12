import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMasculineComponent } from './modal-masculine.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('ModalMasculineComponent', () => {
  let component: ModalMasculineComponent;
  let fixture: ComponentFixture<ModalMasculineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalMasculineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMasculineComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalMasculine = jasmine.createSpy('getContainerModalMasculine');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all modal masculine clothes section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-clothes-section-inner');
    const expectedSpans = ['Bermuda', 'Blazer', 'Calça', 'Camisa', 'Camiseta', 'Casacos', 'Jaquetas', 'Polo'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all modal masculine accessories section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-accessories-section-inner');
    const expectedSpans = ['Bolsa', 'Boné e chapéu', 'Carteira', 'Cinto', 'Colar', 'Mochila e Mala', 'Pulseira', 'Outros acessórios'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all modal masculine shoes section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-shoes-section-inner');
    const expectedSpans = ['Bota', 'Chinelo', 'Mocassim', 'Tênis'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all modal masculine underwear section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-underwear-section-inner');
    const expectedSpans = ['Cueca', 'Meia'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all modal masculine beach section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-beach-section-inner');
    const expectedSpans = ['Sunga'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all modal masculine buy-by-price section spans', () => {
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
    const imgContent = fixture.nativeElement.querySelector('.img-content');

    expect(imgContent.src).toContain("");
  });

  it('should render span title clothes', () => {
    const span = fixture.nativeElement.querySelector('.span-title-category-clothes');
    expect(span.textContent.trim()).toBe("ROUPAS");
  });

  it('should render span title accessories', () => {
    const span = fixture.nativeElement.querySelector('.span-title-category-accessories');
    expect(span.textContent.trim()).toBe("ACESSÓRIOS");
  });

  it('should render span title shoes', () => {
    const span = fixture.nativeElement.querySelector('.span-title-category-shoes');
    expect(span.textContent.trim()).toBe("SAPATOS");
  });

  it('should render span title underwear', () => {
    const span = fixture.nativeElement.querySelector('.span-title-category-underwear');
    expect(span.textContent.trim()).toBe("UNDERWEAR");
  });

  it('should render span title beach', () => {
    const span = fixture.nativeElement.querySelector('.span-title-category-beach');
    expect(span.textContent.trim()).toBe("PRAIA");
  });

  it('should render span title buy-by-price', () => {
    const span = fixture.nativeElement.querySelector('.span-title-category-buy-by-price');
    expect(span.textContent.trim()).toBe("COMPRE POR PREÇO");
  });
});
