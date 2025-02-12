import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMainComponent } from './register-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { FirstPartRegisterComponent } from '../first-part-register-components/first-part-register/first-part-register.component';
import { SecondPartRegisterMainComponent } from '../second-part-register-components/second-part-register-main/second-part-register-main.component';
import { MyAccountFirstPartComponent } from '../first-part-register-components/my-account-first-part/my-account-first-part.component';
import { MyOrdersFirstPartComponent } from '../first-part-register-components/my-orders-first-part/my-orders-first-part.component';
import { HeaderMainComponent } from '../../../header-and-footer-login-and-register/header-components/header-main/header-main.component';
import { FooterMainComponent } from '../../../header-and-footer-login-and-register/footer-components/footer-main/footer-main.component';

describe('RegisterMainComponent', () => {
  let component: RegisterMainComponent;
  let fixture: ComponentFixture<RegisterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [RegisterMainComponent, HeaderMainComponent, FirstPartRegisterComponent,
        SecondPartRegisterMainComponent, FooterMainComponent, MyAccountFirstPartComponent,
        MyOrdersFirstPartComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
