import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsMainComponent } from './reviews-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('ReviewsMainComponent', () => {
  let component: ReviewsMainComponent;
  let fixture: ComponentFixture<ReviewsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ReviewsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header reviews', () => {
    const header = fixture.nativeElement.querySelector('.header-reviews');
    expect(header.textContent.trim()).toBe("Avaliações");
  });

  it('should render span reviews', () => {
    const span = fixture.nativeElement.querySelector('.span-reviews');
    expect(span.textContent.trim()).toBe("Seja o primeiro a avaliar este produto.");
  });

  it('should render button reviews', () => {
    const button = fixture.nativeElement.querySelector('.container-reviews > button');
    expect(button.textContent.trim()).toBe("ESCREVA UMA AVALIAÇÃO");
  });
});
