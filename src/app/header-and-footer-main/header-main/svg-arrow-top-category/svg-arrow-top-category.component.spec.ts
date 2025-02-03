import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowTopCategoryComponent } from './svg-arrow-top-category.component';

describe('SvgArrowTopCategoryComponent', () => {
  let component: SvgArrowTopCategoryComponent;
  let fixture: ComponentFixture<SvgArrowTopCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgArrowTopCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowTopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
