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

describe('HomeMainComponent', () => {
  let component: HomeMainComponent;
  let fixture: ComponentFixture<HomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HomeMainComponent, HeaderComponent, HeaderFirstComponent, HeaderSecondComponent,
        AccountFavoritesBagComponent, ModalAccountComponent, BagEmptyComponent, SvgArrowTopComponent
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
