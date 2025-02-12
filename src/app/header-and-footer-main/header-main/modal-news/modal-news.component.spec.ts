import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewsComponent } from './modal-news.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('ModalNewsComponent', () => {
  let component: ModalNewsComponent;
  let fixture: ComponentFixture<ModalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewsComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalNews = jasmine.createSpy('getContainerModalNews');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header feminine', () => {
    const header = fixture.nativeElement.querySelector('.header-feminine');
    expect(header.textContent.trim()).toBe("FEMININO");
  });

  it('should render header masculine', () => {
    const header = fixture.nativeElement.querySelector('.header-masculine');
    expect(header.textContent.trim()).toBe("MASCULINO");
  });

  it('should render header children', () => {
    const header = fixture.nativeElement.querySelector('.header-children');
    expect(header.textContent.trim()).toBe("INFANTIL");
  });
});
