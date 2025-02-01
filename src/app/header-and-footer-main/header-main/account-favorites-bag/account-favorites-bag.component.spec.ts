import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFavoritesBagComponent } from './account-favorites-bag.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ModalAccountComponent } from '../modal-account/modal-account.component';
import { BagEmptyComponent } from '../bag-empty/bag-empty.component';
import { SvgArrowTopComponent } from '../svg-arrow-top/svg-arrow-top.component';

describe('AccountFavoritesBagComponent', () => {
  let component: AccountFavoritesBagComponent;
  let fixture: ComponentFixture<AccountFavoritesBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [AccountFavoritesBagComponent, ModalAccountComponent, BagEmptyComponent,
        SvgArrowTopComponent
      ],
      // providers: [FlashSaleProductAllInfoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFavoritesBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon-account', () => {
    const iconAccount = fixture.nativeElement.querySelector('.icon-account');
    expect(iconAccount).not.toBeNull();
  });

  it('should render span account', () => {
    const span = fixture.nativeElement.querySelector('.span-account-header');
    expect(span.textContent).toBe("Conta");
  });

  it('should render icon-favorite', () => {
    const icon = fixture.nativeElement.querySelector('.icon-favorite');
    expect(icon).not.toBeNull();
  });

  it('should render span favorite', () => {
    const span = fixture.nativeElement.querySelector('.span-favorite-header');
    expect(span.textContent).toBe("Favoritos");
  });

  it('should render icon-bag', () => {
    const icon = fixture.nativeElement.querySelector('.icon-bag');
    expect(icon).not.toBeNull();
  });

  it('should render span bag', () => {
    const span = fixture.nativeElement.querySelector('.span-bag-header');
    expect(span.textContent).toBe("Sacola");
  });
});
