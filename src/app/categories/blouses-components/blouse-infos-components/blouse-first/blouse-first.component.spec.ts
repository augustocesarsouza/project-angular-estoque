import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseFirstComponent } from './blouse-first.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { SvgArrowBlousesComponent } from '../../svg-arrow-blouses/svg-arrow-blouses.component';
import { QuantityColumnMainComponent } from '../quantity-column-main/quantity-column-main.component';
import { SelectNewsComponent } from '../select-news/select-news.component';


describe('BlouseFirstComponent', () => {
  let component: BlouseFirstComponent;
  let fixture: ComponentFixture<BlouseFirstComponent>;

  const quantityItems = 5;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BlouseFirstComponent, SvgArrowBlousesComponent, QuantityColumnMainComponent, SelectNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlouseFirstComponent);
    component = fixture.componentInstance;

    component.quantityItems = quantityItems;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span quantity products', () => {
    const span = fixture.nativeElement.querySelector('.span-quantity-products-main');
    expect(span.textContent.trim()).toBe(`${quantityItems} produtos encontrados`);
  });

  it('should render svgs', () => {
    const svgs = fixture.nativeElement.querySelectorAll('.container-blouse-before-after > app-svg-arrow-blouses');
    expect(svgs.length).toBe(2);
  });

  it('should render span before', () => {
    const span = fixture.nativeElement.querySelector('.span-before');
    expect(span.textContent.trim()).toBe("Anterior");
  });

  it('should render span after', () => {
    const span = fixture.nativeElement.querySelector('.span-after');
    expect(span.textContent.trim()).toBe("Próximo");
  });

  it('should render spans main numbers', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-main-numbers');
    expect(spans.length).toBe(11);
  });
});
