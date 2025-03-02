import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAndExchangesAndReturnsMainComponent } from './product-details-and-exchanges-and-returns-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { Category } from '../../../interface-entity/category';
import { Item } from '../../../interface-entity/item';

describe('ProductDetailsAndExchangesAndReturnsMainComponent', () => {
  let component: ProductDetailsAndExchangesAndReturnsMainComponent;
  let fixture: ComponentFixture<ProductDetailsAndExchangesAndReturnsMainComponent>;

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
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ProductDetailsAndExchangesAndReturnsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsAndExchangesAndReturnsMainComponent);
    component = fixture.componentInstance;

    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header product details', () => {
    const header = fixture.nativeElement.querySelector('.container-product-details > h1');
    expect(header.textContent.trim()).toBe("Detalhes do Produto");
  });

  it('should render span description', () => {
    const span = fixture.nativeElement.querySelector('.container-product-details > span');
    expect(span.textContent.trim()).toBe(item.description);
  });

  it('should render header exchanges return', () => {
    const header = fixture.nativeElement.querySelector('.container-exchanges-and-returns > h1');
    expect(header.textContent.trim()).toBe("Trocas e Devoluções");
  });

  it('should render all first span exchanges and returns', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-exchanges-and-returns > span');

    expect(spans[0].textContent.trim()).toBe("Caso não fique satisfeito com o produto adquirido, não se preocupe, nosso prazo de trocas é de 07 dias corridos.");
  });

  it('should render all second span exchanges and returns', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-exchanges-and-returns > span');

    expect(spans[1].textContent.trim()).toBe("Você pode efetuar a troca por Vale Compras, podendo ser utilizado aqui no site em um novo pedido.");
  });

  it('should render all third span exchanges and returns', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-exchanges-and-returns > span');

    expect(spans[2].textContent.trim()).toBe("Para maiores informações, clique aqui.");
  });

  it('should render container transparent', () => {
    const container = fixture.nativeElement.querySelector('.container-transparent');

    expect(container).not.toBeNull();
  });

  it('should render button open details', () => {
    const button = fixture.nativeElement.querySelector('.button-open-details');
    expect(button.textContent.trim()).toBe("ABRIR DETALHES");
  });

  it('should render svg app-svg-arrow-fontawesome', () => {
    const svg = fixture.nativeElement.querySelector('.button-open-details > app-svg-arrow-fontawesome');
    expect(svg).not.toBeNull();
  });

  it('should render button close details', () => {
    const button = fixture.nativeElement.querySelector('.button-close-details');
    expect(button.textContent.trim()).toBe("ABRIR DETALHES");
  });

  it('should render svg close app-svg-arrow-fontawesome', () => {
    component.alreadyClickedButtonSeeMoreDetails = true;
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('.button-close-details > app-svg-arrow-fontawesome');
    expect(svg).not.toBeNull();
  });
});
