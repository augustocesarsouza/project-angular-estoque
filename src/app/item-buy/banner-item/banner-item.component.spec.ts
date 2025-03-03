import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerItemComponent } from './banner-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('BannerItemComponent', () => {
  let component: BannerItemComponent;
  let fixture: ComponentFixture<BannerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BannerItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img banner src', () => {
    const img = fixture.nativeElement.querySelector('.container-banner-item > img');
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740997486/imgs-backend-estoque/item/banner-item_wbris4.webp");
  });

  it('should render img banner alt', () => {
    const img = fixture.nativeElement.querySelector('.container-banner-item > img');
    expect(img.alt).toBe("img-banner");
  });
});
