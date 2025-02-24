import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseFirstComponent } from './blouse-first.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { SvgArrowBlousesComponent } from '../../svg-arrow-blouses/svg-arrow-blouses.component';
import { Item } from '../../../../interface-entity/item';

describe('BlouseFirstComponent', () => {
  let component: BlouseFirstComponent;
  let fixture: ComponentFixture<BlouseFirstComponent>;

  const objA: Item = {
    brand: "brand345",
    discountPercentage: 80,
    id: "41b3b739-a904-4d8d-84a6-668d2fc4a2eb",
    name: "Blusa Ampla Jim John John Feminina",
    priceProduct: 657.23,
    size: "54,55",
    category: "category",
    imgProductAll: [ "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740234091/imgs-backend-estoque/images-item/ia2aj2u70501ehficivy.jpg"]
  }

  const itemList: Item[] = [objA];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BlouseFirstComponent, SvgArrowBlousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlouseFirstComponent);
    component = fixture.componentInstance;

    component.itemList = itemList;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span quantity products', () => {
    const span = fixture.nativeElement.querySelector('.span-quantity-products-main');
    expect(span.textContent.trim()).toBe(`${itemList.length} produtos encontrados`);
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

  it('should render spans column first', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-column-first > span');
    expect(spans.length).toBe(4);
  });

  it('should render spans column second', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-column-second > span');
    expect(spans.length).toBe(5);
  });

  it('should get all options from select', () => {
    const options = fixture.nativeElement.querySelectorAll('select option');
    expect(options.length).toBe(4); // Confere se são 4 opções
  });
});
