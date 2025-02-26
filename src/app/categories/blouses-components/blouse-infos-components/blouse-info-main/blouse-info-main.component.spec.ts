import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseInfoMainComponent } from './blouse-info-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { BlouseFirstComponent } from '../blouse-first/blouse-first.component';
import { SvgArrowBlousesComponent } from '../../svg-arrow-blouses/svg-arrow-blouses.component';
import { Item } from '../../../../interface-entity/item';
import { QuantityColumnMainComponent } from '../quantity-column-main/quantity-column-main.component';
import { SelectNewsComponent } from '../select-news/select-news.component';
import { BlouseItemComponent } from '../blouse-item/blouse-item.component';

describe('BlouseInfoMainComponent', () => {
  let component: BlouseInfoMainComponent;
  let fixture: ComponentFixture<BlouseInfoMainComponent>;

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
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BlouseInfoMainComponent, BlouseFirstComponent, SvgArrowBlousesComponent,
        QuantityColumnMainComponent, SelectNewsComponent, BlouseItemComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlouseInfoMainComponent);
    component = fixture.componentInstance;

    component.itemList = itemList;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
