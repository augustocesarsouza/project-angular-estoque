import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HeaderSecondComponent } from '../header-second/header-second.component';
import { HeaderFirstComponent } from '../header-first/header-first.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { AccountFavoritesBagComponent } from '../account-favorites-bag/account-favorites-bag.component';
import { ModalAccountComponent } from '../modal-account/modal-account.component';
import { BagEmptyComponent } from '../bag-empty/bag-empty.component';
import { SvgArrowTopComponent } from '../svg-arrow-top/svg-arrow-top.component';
import { AllNavCategoryComponent } from '../all-nav-category/all-nav-category.component';
import { ModalNewsComponent } from '../modal-news/modal-news.component';
import { ModalFeminineComponent } from '../modal-feminine/modal-feminine.component';
import { ModalMasculineComponent } from '../modal-masculine/modal-masculine.component';
import { ModalChildrenComponent } from '../modal-children/modal-children.component';
import { ModalHomeComponent } from '../modal-home/modal-home.component';
import { ModalBranchComponent } from '../modal-branch/modal-branch.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HeaderComponent, HeaderFirstComponent, HeaderSecondComponent,
        AccountFavoritesBagComponent, ModalAccountComponent, BagEmptyComponent,
        SvgArrowTopComponent, AllNavCategoryComponent, ModalNewsComponent,
        ModalFeminineComponent,ModalMasculineComponent,
        ModalChildrenComponent, ModalHomeComponent, ModalBranchComponent
      ],
      // providers: [UserService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
