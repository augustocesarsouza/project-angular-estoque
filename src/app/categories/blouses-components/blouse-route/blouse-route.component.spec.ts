import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseRouteComponent } from './blouse-route.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { UpdateCurrentUrlCategoriesService } from '../../service/update-current-url-categories.service';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}

describe('BlouseRouteComponent', () => {
  let component: BlouseRouteComponent;
  let fixture: ComponentFixture<BlouseRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BlouseRouteComponent],
      providers: [
        UpdateCurrentUrlCategoriesService,
        { provide: GoogleApiService, useClass: MockGoogleApiService },
        // { provide: UpdateCurrentUrlCategoriesService, useValue: mockUpdateCurrentUrlCategoriesService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlouseRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
