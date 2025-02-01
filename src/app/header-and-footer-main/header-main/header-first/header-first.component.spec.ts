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
    const span = fixture.nativeElement.querySelectorAll('.container-all-spans > span');
    expect(span.length).toEqual(3);
    expect(span[0].textContent).toBe("Pague com PIX e ganhe 3% OFF");
    expect(span[1].textContent).toBe("Até 3x sem juros");
    expect(span[2].textContent).toBe("Entrega Expressa* | Retire em Loja");
  });

  it('should render two link', () => {
    const links = fixture.nativeElement.querySelectorAll('.container-help-store > a');
    expect(links.length).toEqual(2);
  });
});
