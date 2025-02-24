import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterMainComponent } from './category-filter-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { TypesToChooseComponent } from '../types-to-choose/types-to-choose.component';
import { ColorsAllComponent } from '../colors-all/colors-all.component';
import { PriceAllComponent } from '../price-all/price-all.component';
import { BrandAllComponent } from '../brand-all/brand-all.component';
import { SizeAllComponent } from '../size-all/size-all.component';

describe('CategoryFilterMainComponent', () => {
  let component: CategoryFilterMainComponent;
  let fixture: ComponentFixture<CategoryFilterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CategoryFilterMainComponent, TypesToChooseComponent, ColorsAllComponent, PriceAllComponent,
      BrandAllComponent, SizeAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFilterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span floating color', () => {
    const span = fixture.nativeElement.querySelector('.container-floating-color > span');
    expect(span.textContent.trim()).toBe("Limpar Filtros");
  });

  it('should render span floating price range', () => {
    const span = fixture.nativeElement.querySelector('.container-floating-price-range > span');
    expect(span.textContent.trim()).toBe("Limpar Filtros");
  });

  it('should render span floating brand', () => {
    const span = fixture.nativeElement.querySelector('.container-floating-brand > span');
    expect(span.textContent.trim()).toBe("Limpar Filtros");
  });

  it('should render span floating size', () => {
    const span = fixture.nativeElement.querySelector('.container-floating-size > span');
    expect(span.textContent.trim()).toBe("Limpar Filtros");
  });
});
