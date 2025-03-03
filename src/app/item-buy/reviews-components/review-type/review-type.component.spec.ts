import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTypeComponent } from './review-type.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('ReviewTypeComponent', () => {
  let component: ReviewTypeComponent;
  let fixture: ComponentFixture<ReviewTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ReviewTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
