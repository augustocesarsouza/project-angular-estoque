import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHomeComponent } from './modal-home.component';

describe('ModalHomeComponent', () => {
  let component: ModalHomeComponent;
  let fixture: ComponentFixture<ModalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHomeComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalHome = jasmine.createSpy('getContainerModalHome');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span decoration', () => {
    const span = fixture.nativeElement.querySelector('.span-title-decoration');
    expect(span.textContent.trim()).toBe("DECORAÇÃO");
  });

  it('should render span table', () => {
    const span = fixture.nativeElement.querySelector('.span-title-table');
    expect(span.textContent.trim()).toBe("MESA");
  });

  it('should render span bar', () => {
    const span = fixture.nativeElement.querySelector('.span-title-bar');
    expect(span.textContent.trim()).toBe("BAR");
  });

  it('should render span homewear', () => {
    const span = fixture.nativeElement.querySelector('.span-title-homewear');
    expect(span.textContent.trim()).toBe("HOMEWEAR");
  });

  it('should render span homewear', () => {
    const img = fixture.nativeElement.querySelector('.img-content');
    expect(img.src).toContain("https://d1ug6lpn0d6ze6.cloudfront.net/Custom/Content/Banners/91/91_banner638730495986724297.webp");
    expect(img.alt).toBe("img-content");
  });
});
