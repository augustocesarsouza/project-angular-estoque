import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressComponent } from './user-address.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('UserAddressComponent', () => {
  let component: UserAddressComponent;
  let fixture: ComponentFixture<UserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAddressComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header my address', () => {
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.header-my-address');
    expect(header.textContent.trim()).toBe('Meus endereços');
  });

  it('should render svg more', () => {
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('.container-svg-plus > app-svg-more')
    expect(svg).not.toBeNull();
  });

  it('should render span insert', () => {
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.span-insert');
    expect(span.textContent.trim()).toBe('Inserir novo endereço');
  });

  it('should render svg address', () => {
    component.addressArray = [];
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('.container-svg-there-is-no-addresses > app-svg-address');
    expect(svg).not.toBeNull();
  });

  it('should render span you yet not have address', () => {
    component.addressArray = [];
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-svg-there-is-no-addresses > span');
    expect(span.textContent.trim()).toBe("Você ainda não tem endereços.");
  });
});
