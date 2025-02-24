import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlousesMainComponent } from './blouses-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { BrowsingRoteComponent } from '../browsing-rote/browsing-rote.component';
import { CategoryFilterMainComponent } from '../category-filter-components/category-filter-main/category-filter-main.component';
import { HeaderAndFooterMainModule } from '../../../header-and-footer-main/header-and-footer-main.module';
import { TypesToChooseComponent } from '../category-filter-components/types-to-choose/types-to-choose.component';
import { ColorsAllComponent } from '../category-filter-components/colors-all/colors-all.component';
import { PriceAllComponent } from '../category-filter-components/price-all/price-all.component';
import { BrandAllComponent } from '../category-filter-components/brand-all/brand-all.component';
import { SizeAllComponent } from '../category-filter-components/size-all/size-all.component';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}

describe('BlousesMainComponent', () => {
  let component: BlousesMainComponent;
  let fixture: ComponentFixture<BlousesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule, HeaderAndFooterMainModule],
      declarations: [BlousesMainComponent, BrowsingRoteComponent, CategoryFilterMainComponent,
        TypesToChooseComponent, ColorsAllComponent, PriceAllComponent, BrandAllComponent, SizeAllComponent
      ],
      providers: [
        { provide: GoogleApiService, useClass: MockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlousesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
