import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseItemComponent } from './blouse-item.component';
import { Item } from '../../../../interface-entity/item';

describe('BlouseItemComponent', () => {
  let component: BlouseItemComponent;
  let fixture: ComponentFixture<BlouseItemComponent>;

  const itemList: Item[] = [];
    const objItem = {
      id: "74b20ea3-b09b-4802-b2db-84acceaf911e",
      name: "name1",
      priceProduct: 133.45,
      discountPercentage: 60,
      size: "23,34",
      brand: "brand1",
      category: "category",
      imgProductAll: ["asasdsd"],
    };

    itemList.push(objItem);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlouseItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlouseItemComponent);
    component = fixture.componentInstance;

    component.item = itemList[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all imgs', () => {
    const imgsDivs = fixture.nativeElement.querySelectorAll('.flip > div');
    expect(imgsDivs.length).toBe(2);
  });

  it('should render span discount percentage', () => {
    const span = fixture.nativeElement.querySelector('.span-discount-percentage');
    expect(span.textContent.trim()).toBe(`${objItem.discountPercentage}%OFF`);
  });

  it('should render button add car', () => {
    const buttonAddCar = fixture.nativeElement.querySelector('.button-add-car');
    expect(buttonAddCar.textContent.trim()).toBe("ADICIONAR AO CARRINHO");
  });

  it('should render button add car', () => {
    const containerColorItem = fixture.nativeElement.querySelector('.color-item');
    expect(containerColorItem).not.toBeNull();
  });

  it('should render span name item', () => {
    const span = fixture.nativeElement.querySelector('.span-name-item');
    expect(span.textContent.trim()).toBe(objItem.name + "...");
  });

  it('should render span price original', () => {
    const span = fixture.nativeElement.querySelector('.span-price-original');
    expect(span.textContent.trim()).toBe("R$ 133,45");
  });

  it('should render span price with discount', () => {
    const span = fixture.nativeElement.querySelector('.span-price-with-discount');
    expect(span.textContent.trim()).toBe("R$ 53,38");
  });

  it('should render span installment 3x', () => {
    const span = fixture.nativeElement.querySelector('.span-installment-3x');
    expect(span.textContent.trim()).toBe("3x R$ 17,79");
  });

  it('should render button sizes', () => {
    const button = fixture.nativeElement.querySelector('.button-sizes');
    expect(button.textContent.trim()).toBe("23 34");
  });
});
