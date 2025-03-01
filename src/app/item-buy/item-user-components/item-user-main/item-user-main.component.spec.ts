import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUserMainComponent } from './item-user-main.component';
import { HeaderAndFooterMainModule } from '../../../header-and-footer-main/header-and-footer-main.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { Category } from '../../../interface-entity/category';
import { Item } from '../../../interface-entity/item';
import { AllImgItemComponent } from '../all-img-item/all-img-item.component';
import { HeaderBrandNameItemComponent } from '../header-brand-name-item/header-brand-name-item.component';
import { PriceRealAndDiscountComponent } from '../price-real-and-discount/price-real-and-discount.component';
import { ColorsItemComponent } from '../colors-item/colors-item.component';
import { SizesComponent } from '../sizes/sizes.component';
import { BuyAndHeartComponent } from '../buy-and-heart/buy-and-heart.component';
import { TypeYourCepComponent } from '../type-your-cep/type-your-cep.component';
import { CheckDeliveryComponent } from '../check-delivery/check-delivery.component';
import { ImgShowComponent } from '../img-show/img-show.component';

describe('ItemUserMainComponent', () => {
  let component: ItemUserMainComponent;
  let fixture: ComponentFixture<ItemUserMainComponent>;

  const category: Category = {
      id: "dad8ba00-1e55-4b09-808f-0e6d706c288f",
      nameCategory: "Feminino>Roupas>Blusa",
      items: null,
    };

    const item: Item = {
      id: "0f17df0b-1a56-4052-a636-498aac76a363",
      brand: "JOHN JOHN FEM",
      category: category,
      discountPercentage: 50,
      imgProductAll: ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683876/imgs-backend-estoque/images-item/lold7rshovjrq9tv8ndb.png"] ,
      name: "Blusa Ampla Jim John John Feminina",
      priceProduct: 349.96,
      size: "PP,P,M,G,GG",
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, HeaderAndFooterMainModule],
      declarations: [ItemUserMainComponent, AllImgItemComponent, HeaderBrandNameItemComponent,
                PriceRealAndDiscountComponent, ColorsItemComponent, SizesComponent, BuyAndHeartComponent,
                TypeYourCepComponent, CheckDeliveryComponent, ImgShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemUserMainComponent);
    component = fixture.componentInstance;

    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
