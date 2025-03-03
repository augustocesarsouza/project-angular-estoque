import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingRoteComponent } from './browsing-rote.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { Category } from '../../interface-entity/category';
import { Item } from '../../interface-entity/item';

describe('BrowsingRoteComponent', () => {
  let component: BrowsingRoteComponent;
  let fixture: ComponentFixture<BrowsingRoteComponent>;

  const category: Category = {id: 'dad8ba00-1e55-4b09-808f-0e6d706c288f', nameCategory: 'Feminino>Roupas>Blusa', items: null};
  const item: Item = {
    brand: "brand345",
    category: category,
    discountPercentage: 80,
    id: "41b3b739-a904-4d8d-84a6-668d2fc4a2eb",
    imgProductAll: ['https://res.cloudinary.com/dyqsqg7pk/image/upload/…kend-estoque/images-item/ia2aj2u70501ehficivy.jpg', 'https://res.cloudinary.com/dyqsqg7pk/image/upload/…kend-estoque/images-item/xu82mdyqoeladtarh1lc.jpg', 'https://res.cloudinary.com/dyqsqg7pk/image/upload/…kend-estoque/images-item/adzjnygzozzohdc6rg9v.jpg', 'https://res.cloudinary.com/dyqsqg7pk/image/upload/…kend-estoque/images-item/uh2cuiv00zxrnmpjizmo.jpg', 'https://res.cloudinary.com/dyqsqg7pk/image/upload/…kend-estoque/images-item/nnm76m2eokc185fvxpj8.jpg'],
    name: "Blusa Ampla Jim John John Feminina",
    priceProduct: 657.23,
    size: "54,55",
    description: "Descrição do produto"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BrowsingRoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingRoteComponent);
    component = fixture.componentInstance;

    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spans', () => {
    const spans = fixture.nativeElement.querySelectorAll('.span-browsing-rote');

    expect(spans[0].textContent.trim()).toBe("Página Inicial");
    expect(spans[1].textContent.trim()).toBe("Feminino");
    expect(spans[2].textContent.trim()).toBe("Roupas");
    expect(spans[3].textContent.trim()).toBe("Blusa");
  });

  it('should render span name', () => {
    const span = fixture.nativeElement.querySelector('.span-name-item');

    expect(span.textContent.trim()).toBe(item.name);
  });
});
