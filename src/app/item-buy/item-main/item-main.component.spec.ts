import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainComponent } from './item-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ItemService } from '../../services-backend/item.service';
import { GoogleApiService } from '../../login-and-register-new-account/service/google-api.service';
import { HeaderAndFooterMainModule } from '../../header-and-footer-main/header-and-footer-main.module';
import { BrowsingRoteComponent } from '../browsing-rote/browsing-rote.component';
import { Item } from '../../interface-entity/item';
import { Category } from '../../interface-entity/category';
import { AllImgItemComponent } from '../item-user-components/all-img-item/all-img-item.component';
import { HeaderBrandNameItemComponent } from '../item-user-components/header-brand-name-item/header-brand-name-item.component';
import { PriceRealAndDiscountComponent } from '../item-user-components/price-real-and-discount/price-real-and-discount.component';
import { ColorsItemComponent } from '../item-user-components/colors-item/colors-item.component';
import { SizesComponent } from '../item-user-components/sizes/sizes.component';
import { BuyAndHeartComponent } from '../item-user-components/buy-and-heart/buy-and-heart.component';
import { TypeYourCepComponent } from '../item-user-components/type-your-cep/type-your-cep.component';
import { CheckDeliveryComponent } from '../item-user-components/check-delivery/check-delivery.component';
import { ImgShowComponent } from '../item-user-components/img-show/img-show.component';
import { ItemUserMainComponent } from '../item-user-components/item-user-main/item-user-main.component';
import { ProductDetailsAndExchangesAndReturnsMainComponent } from '../product-details-and-exchanges-and-returns-components/product-details-and-exchanges-and-returns-main/product-details-and-exchanges-and-returns-main.component';
import { FooterMainComponent } from '../../header-and-footer-login-and-register/footer-components/footer-main/footer-main.component';
import { ReviewsMainComponent } from '../reviews-components/reviews-main/reviews-main.component';
import { BannerItemComponent } from '../banner-item/banner-item.component';
import { YouWouldLikeReceiverNewsComponent } from '../../you-would-like-receiver-news/you-would-like-receiver-news.component';
import { FormsModule } from '@angular/forms';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}

describe('ItemMainComponent', () => {
  let component: ItemMainComponent;
  let fixture: ComponentFixture<ItemMainComponent>;

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
    description: "seila seila"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, HeaderAndFooterMainModule, FormsModule],
      declarations: [ItemMainComponent, ItemUserMainComponent, BrowsingRoteComponent, AllImgItemComponent, HeaderBrandNameItemComponent, PriceRealAndDiscountComponent, ColorsItemComponent, SizesComponent, BuyAndHeartComponent,TypeYourCepComponent, CheckDeliveryComponent, ImgShowComponent,
        ProductDetailsAndExchangesAndReturnsMainComponent, FooterMainComponent, ReviewsMainComponent, BannerItemComponent, YouWouldLikeReceiverNewsComponent],
      providers: [ItemService, { provide: GoogleApiService, useClass: MockGoogleApiService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMainComponent);
    component = fixture.componentInstance;

    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span footer', () => {
    const span = fixture.nativeElement.querySelector('.container-span-footer > span');
    expect(span.textContent.trim()).toBe("Estoque é o outlet oficial das marcas Le Lis, Rosa Chá, Bo.Bô, John John, Dudalina, Individual, Le Lis Petit e John John Kids e pertence à Veste S.A Estilo. Na loja online da Estoque você encontra peças novas e limitadas, sem defeitos, de coleções passadas das maiores grifes do Brasil. Aproveite a oportunidade da nossa loja online pelo seu computador ou celular.");
  });
});
