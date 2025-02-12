import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBranchComponent } from './modal-branch.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { BranchLelisLelisHomeImgBoboComponent } from '../branch-lelis-lelis-home-img-bobo/branch-lelis-lelis-home-img-bobo.component';

describe('ModalBranchComponent', () => {
  let component: ModalBranchComponent;
  let fixture: ComponentFixture<ModalBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalBranchComponent, BranchLelisLelisHomeImgBoboComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBranchComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalBranch = jasmine.createSpy('getContainerModalBranch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all feminine-1 section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-feminine-1-section-inner');
    const expectedSpans = ['Blusa', 'Calça', 'Vestido', 'Acessórios'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all masculine-1 section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-masculine-1-section-inner');
    const expectedSpans = ['Calça', 'Camisa', 'Camiseta', 'Casaco', 'Acessórios', 'Ver tudo'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all feminine-2 section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-feminine-2-section-inner');
    const expectedSpans = ['Blusa', 'Calça', 'Camisa', 'Polo'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all masculine-2 section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-masculine-2-section-inner');
    const expectedSpans = ['Casaco', 'Calça', 'Camisa', 'Polo', 'Acessórios', 'Ver tudo'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all last-one section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-last-one-section-inner');
    const expectedSpans = ['Casaco', 'Calça', 'Camisa', 'Polo', 'Acessórios', 'Ver tudo'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render title feminine 1', () => {
    const title = fixture.nativeElement.querySelector('.strong-title-feminine-1');
    expect(title.textContent.trim()).toBe("FEMININO");
  });

  it('should render title masculine 1', () => {
    const title = fixture.nativeElement.querySelector('.strong-title-masculine-1');
    expect(title.textContent.trim()).toBe("MASCULINO");
  });

  it('should render title feminine 2', () => {
    const title = fixture.nativeElement.querySelector('.strong-title-feminine-2');
    expect(title.textContent.trim()).toBe("FEMININO");
  });

  it('should render title masculine 2', () => {
    const title = fixture.nativeElement.querySelector('.strong-title-masculine-2');
    expect(title.textContent.trim()).toBe("MASCULINO");
  });

  it('should render span-news', () => {
    const span = fixture.nativeElement.querySelector('.span-news');
    expect(span.textContent.trim()).toBe("Novidades");
  });

  it('should render span-accessories', () => {
    const span = fixture.nativeElement.querySelector('.span-accessories');
    expect(span.textContent.trim()).toBe("Acessórios");
  });

  it('should render all headers news', () => {
    const headers = fixture.nativeElement.querySelectorAll('.header-h3-news-branch');
    expect(headers.length).toEqual(2);
  });
});
