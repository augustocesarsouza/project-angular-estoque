import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChildrenComponent } from './modal-children.component';

describe('ModalChildrenComponent', () => {
  let component: ModalChildrenComponent;
  let fixture: ComponentFixture<ModalChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChildrenComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalChildren = jasmine.createSpy('getContainerModalChildren');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all clothes section spans', () => {
    const spansSections = fixture.nativeElement.querySelectorAll('.span-clothes-section-inner');
    const expectedSpans = ['Blusa', 'Bermuda', 'Calça', 'Camisa', 'Camiseta', 'Polo'];

    expect(spansSections.length).toBe(expectedSpans.length);
    spansSections.forEach((span: HTMLElement, index: number) => {
      if(span.textContent){
        expect(span.textContent.trim()).toBe(expectedSpans[index]);
      }
    });
  });

  it('should render span see all', () => {
    const spanSeeAll = fixture.nativeElement.querySelector('.header-see-all');
    expect(spanSeeAll.textContent.trim()).toBe("Ver tudo");
  });

  it('should render span accessories', () => {
    const span = fixture.nativeElement.querySelector('.span-accessories');
    expect(span.textContent.trim()).toBe("ACESSÓRIOS");
  });

  it('should render span shoes', () => {
    const span = fixture.nativeElement.querySelector('.span-shoes');
    expect(span.textContent.trim()).toBe("SAPATOS");
  });

  it('should render span feminine', () => {
    const span = fixture.nativeElement.querySelector('.span-feminine');
    expect(span.textContent.trim()).toBe("FEMININO");
  });

  it('should render span masculine', () => {
    const span = fixture.nativeElement.querySelector('.span-masculine');
    expect(span.textContent.trim()).toBe("MASCULINO");
  });

  it('should render img content', () => {
    const img = fixture.nativeElement.querySelector('.img-content');
    expect(img.src).toContain("https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/89/89_banner638730496423006101.webp");
    expect(img.alt).toBe("img-content");
  });
});
