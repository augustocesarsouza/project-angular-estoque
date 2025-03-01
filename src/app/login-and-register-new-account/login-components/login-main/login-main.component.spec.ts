import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMainComponent } from './login-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { LoginComponent } from '../login/login.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { HeaderMainComponent } from '../../../header-and-footer-login-and-register/header-components/header-main/header-main.component';
import { FooterMainComponent } from '../../../header-and-footer-login-and-register/footer-components/footer-main/footer-main.component';
import { GoogleApiService } from '../../service/google-api.service';
import { LoginPartBottomComponent } from '../login-part-bottom/login-part-bottom.component';

class MockGoogleApiService {}

describe('LoginMainComponent', () => {
  let component: LoginMainComponent;
  let fixture: ComponentFixture<LoginMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginMainComponent, HeaderMainComponent, FooterMainComponent, LoginComponent,
        CreateAccountComponent, LoginPartBottomComponent
      ],
      providers: [
        { provide: GoogleApiService, useClass: MockGoogleApiService },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
