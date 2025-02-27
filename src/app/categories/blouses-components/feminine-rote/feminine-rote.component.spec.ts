import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeminineRoteComponent } from './feminine-rote.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { BlouseInfoMainComponent } from '../blouse-infos-components/blouse-info-main/blouse-info-main.component';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { UpdateCurrentUrlCategoriesService } from '../../service/update-current-url-categories.service';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}

describe('FeminineRoteComponent', () => {
  let component: FeminineRoteComponent;
  let fixture: ComponentFixture<FeminineRoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [FeminineRoteComponent, BlouseInfoMainComponent],
      providers: [
        UpdateCurrentUrlCategoriesService,
        { provide: GoogleApiService, useClass: MockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeminineRoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
