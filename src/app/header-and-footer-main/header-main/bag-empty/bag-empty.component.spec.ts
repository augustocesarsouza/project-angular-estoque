import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagEmptyComponent } from './bag-empty.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { SvgArrowTopComponent } from '../svg-arrow-top/svg-arrow-top.component';

describe('BagEmptyComponent', () => {
  let component: BagEmptyComponent;
  let fixture: ComponentFixture<BagEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BagEmptyComponent, SvgArrowTopComponent],
      // providers: [FlashSaleProductAllInfoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg arrow top', () => {
    const svg = fixture.nativeElement.querySelector('.container-bag-empty > app-svg-arrow-top');
    expect(svg).not.toBeNull();
  });

  it('should render header bag empty', () => {
    const header = fixture.nativeElement.querySelector('.container-bag-empty > h1');
    expect(header.textContent).toBe("Sua sacola está vazia :(");
  });

  it('should render all spans and your content', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-spans-all > span');
    expect(spans.length).toEqual(2);

    expect(spans[0].textContent).toBe("Clique aqui e confira as ofertas");
    expect(spans[1].textContent).toBe("especiais que selecionamos para você.");
  });
});
