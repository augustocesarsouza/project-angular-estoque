import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypesReviewsComponent } from './all-types-reviews.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ReviewTypeComponent } from '../review-type/review-type.component';

describe('AllTypesReviewsComponent', () => {
  let component: AllTypesReviewsComponent;
  let fixture: ComponentFixture<AllTypesReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [AllTypesReviewsComponent, ReviewTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTypesReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
