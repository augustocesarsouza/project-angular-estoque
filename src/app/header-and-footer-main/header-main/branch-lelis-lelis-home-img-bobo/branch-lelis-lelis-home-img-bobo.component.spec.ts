import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLelisLelisHomeImgBoboComponent } from './branch-lelis-lelis-home-img-bobo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('BranchLelisLelisHomeImgBoboComponent', () => {
  let component: BranchLelisLelisHomeImgBoboComponent;
  let fixture: ComponentFixture<BranchLelisLelisHomeImgBoboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchLelisLelisHomeImgBoboComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchLelisLelisHomeImgBoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all branch lelis section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-branch-lelis-section-inner');
    const expectedSpans = ['Blusa', 'Calça', 'Camisa', 'Macacão', 'Vestido', 'Acessórios'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all header-see-all', () => {
    const headerSeeAll = fixture.nativeElement.querySelectorAll('.header-see-all');
    expect(headerSeeAll.length).toBe(2);
  });

  it('should render all header-h3-news', () => {
    const headerH3News = fixture.nativeElement.querySelectorAll('.header-h3-news');
    expect(headerH3News.length).toBe(3);
  });

  it('should render all branch lelis 2 section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-branch-lelis-2-section-inner');
    const expectedSpans = ['Decoração', 'Bar', 'Homewear'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render all branch lelis 3 section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-branch-lelis-3-section-inner');
    const expectedSpans = ['Blusa', 'Calça', 'Camisa', 'Macacão', 'Vestido', 'Acessórios'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });
});
