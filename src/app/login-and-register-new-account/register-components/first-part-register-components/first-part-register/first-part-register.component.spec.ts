import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartRegisterComponent } from './first-part-register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { MyAccountFirstPartComponent } from '../my-account-first-part/my-account-first-part.component';
import { MyOrdersFirstPartComponent } from '../my-orders-first-part/my-orders-first-part.component';

describe('FirstPartRegisterComponent', () => {
  let component: FirstPartRegisterComponent;
  let fixture: ComponentFixture<FirstPartRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule , RouterTestingModule],
      declarations: [FirstPartRegisterComponent, MyAccountFirstPartComponent,
        FirstPartRegisterComponent, MyOrdersFirstPartComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPartRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div header register', () => {
    const divUserWithoutImg = fixture.nativeElement.querySelector('.container-header-register > div');
    expect(divUserWithoutImg).not.toBeNull();
  });

  it('should render span text user without not logged', () => {
    const span = fixture.nativeElement.querySelector('.container-header-register > span');
    expect(span.textContent.trim()).toBe("Olá,");
  });

  it('should render icon purchase', () => {
    const icon = fixture.nativeElement.querySelector('.container-svg-and-vale-purchase > i');
    expect(icon).not.toBeNull();
  });

  it('should render span vale purchase', () => {
    const span = fixture.nativeElement.querySelector('.container-svg-and-vale-purchase > span');
    expect(span.textContent.trim()).toBe("Vale Compra");
  });
});
