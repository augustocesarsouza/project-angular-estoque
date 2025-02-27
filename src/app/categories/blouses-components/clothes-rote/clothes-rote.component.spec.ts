import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesRoteComponent } from './clothes-rote.component';
import { ItemService } from '../../../services-backend/item.service';
import { UpdateCurrentUrlCategoriesService } from '../../service/update-current-url-categories.service';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

class MockGoogleApiService {
  logout = jasmine.createSpy('logout');
 // Adiciona um método mock para evitar o erro
}

describe('ClothesRoteComponent', () => {
  let component: ClothesRoteComponent;
  let fixture: ComponentFixture<ClothesRoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ClothesRoteComponent],
      providers: [
        UpdateCurrentUrlCategoriesService, ItemService,
        { provide: GoogleApiService, useClass: MockGoogleApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesRoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
