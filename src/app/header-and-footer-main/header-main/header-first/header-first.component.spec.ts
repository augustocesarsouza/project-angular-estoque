import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFirstComponent } from './header-first.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderFirstComponent', () => {
  let component: HeaderFirstComponent;
  let fixture: ComponentFixture<HeaderFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HeaderFirstComponent],
      // providers: [FlashSaleProductAllInfoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span pix', () => {
    const span = fixture.nativeElement.querySelector('.container-first-header > span');
    expect(span.textContent).toBe("Pague com PIX e ganhe 3% OFF");
  });

  it('should render two link', () => {
    const links = fixture.nativeElement.querySelectorAll('.container-help-store > a');
    expect(links.length).toEqual(2);
  });
});
