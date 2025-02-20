import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainComponent } from './home-main.component';
import { HeaderComponent } from '../../header-and-footer-main/header-main/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderFirstComponent } from '../../header-and-footer-main/header-main/header-first/header-first.component';
import { HeaderSecondComponent } from '../../header-and-footer-main/header-main/header-second/header-second.component';
import { AccountFavoritesBagComponent } from '../../header-and-footer-main/header-main/account-favorites-bag/account-favorites-bag.component';
import { ModalAccountComponent } from '../../header-and-footer-main/header-main/modal-account/modal-account.component';
import { BagEmptyComponent } from '../../header-and-footer-main/header-main/bag-empty/bag-empty.component';
import { SvgArrowTopComponent } from '../../header-and-footer-main/header-main/svg-arrow-top/svg-arrow-top.component';
import { AllNavCategoryComponent } from '../../header-and-footer-main/header-main/all-nav-category/all-nav-category.component';
import { ModalNewsComponent } from '../../header-and-footer-main/header-main/modal-news/modal-news.component';
import { ModalFeminineComponent } from '../../header-and-footer-main/header-main/modal-feminine/modal-feminine.component';
import { ModalMasculineComponent } from '../../header-and-footer-main/header-main/modal-masculine/modal-masculine.component';
import { ModalChildrenComponent } from '../../header-and-footer-main/header-main/modal-children/modal-children.component';
import { ModalHomeComponent } from '../../header-and-footer-main/header-main/modal-home/modal-home.component';
import { ModalBranchComponent } from '../../header-and-footer-main/header-main/modal-branch/modal-branch.component';
import { BranchLelisLelisHomeImgBoboComponent } from '../../header-and-footer-main/header-main/branch-lelis-lelis-home-img-bobo/branch-lelis-lelis-home-img-bobo.component';
import { GoogleApiService } from '../../login-and-register-new-account/service/google-api.service';
import { ImgHighlightMainComponent } from '../imgs-highlight-components/img-highlight-main/img-highlight-main.component';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}


describe('HomeMainComponent', () => {
  let component: HomeMainComponent;
  let fixture: ComponentFixture<HomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HomeMainComponent, ImgHighlightMainComponent, HeaderComponent, HeaderFirstComponent, HeaderSecondComponent,
        AccountFavoritesBagComponent, ModalAccountComponent, BagEmptyComponent, SvgArrowTopComponent, AllNavCategoryComponent, ModalNewsComponent, ModalFeminineComponent,ModalMasculineComponent,
        ModalChildrenComponent, ModalHomeComponent, ModalBranchComponent,
         BranchLelisLelisHomeImgBoboComponent
      ],
      providers: [
        { provide: GoogleApiService, useClass: MockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
