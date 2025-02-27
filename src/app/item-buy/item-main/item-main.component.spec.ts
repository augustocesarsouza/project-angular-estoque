import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainComponent } from './item-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ItemService } from '../../services-backend/item.service';
import { GoogleApiService } from '../../login-and-register-new-account/service/google-api.service';
import { HeaderAndFooterMainModule } from '../../header-and-footer-main/header-and-footer-main.module';
import { BrowsingRoteComponent } from '../browsing-rote/browsing-rote.component';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}

describe('ItemMainComponent', () => {
  let component: ItemMainComponent;
  let fixture: ComponentFixture<ItemMainComponent>;

  const imgProductAll: string[] = ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683876/imgs-backend-estoque/images-item/lold7rshovjrq9tv8ndb.png",
    "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683877/imgs-backend-estoque/images-item/wkew9znjwnxthsrkqgql.png"
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, HeaderAndFooterMainModule],
      declarations: [ItemMainComponent, BrowsingRoteComponent],
      providers: [ItemService, { provide: GoogleApiService, useClass: MockGoogleApiService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMainComponent);
    component = fixture.componentInstance;

    component.imgProductAll = imgProductAll;
    component.whichImgShowUser = imgProductAll[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all imgs', () => {
    const imgs = fixture.nativeElement.querySelectorAll('.container-all-imgs-item > div > img');
    expect(imgs[0].src).toBe(imgProductAll[0]);
    expect(imgs[1].src).toBe(imgProductAll[1]);
  });

  it('should render quantity of the 2 svg both left and right', () => {
    const svgs = fixture.nativeElement.querySelectorAll('.container-img-show > app-svg-arrow-fontawesome');
    expect(svgs.length).toBe(2);
  });

  it('should render img main', () => {
    const img = fixture.nativeElement.querySelector('.image-container-to-zoom > img');
    expect(img.src).toBe(imgProductAll[0]);
  });
});
