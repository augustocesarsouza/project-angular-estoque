import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBrandNameItemComponent } from './header-brand-name-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderBrandNameItemComponent', () => {
  let component: HeaderBrandNameItemComponent;
  let fixture: ComponentFixture<HeaderBrandNameItemComponent>;

  const brand = "brand1";
  const itemName = "BLUSA AMPLA JIM JOHN JOHN FEMININA";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HeaderBrandNameItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBrandNameItemComponent);
    component = fixture.componentInstance;

    component.brand = brand;
    component.itemName = itemName;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render brand', () => {
    const header = fixture.nativeElement.querySelector('.header-brand');
    expect(header.textContent).toBe(brand);
  });

  it('should render item name', () => {
    const header = fixture.nativeElement.querySelector('.header-name-item');
    expect(header.textContent).toBe(itemName);
  });
});
