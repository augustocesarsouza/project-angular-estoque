import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowBlousesComponent } from './svg-arrow-blouses.component';

describe('SvgArrowBlousesComponent', () => {
  let component: SvgArrowBlousesComponent;
  let fixture: ComponentFixture<SvgArrowBlousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgArrowBlousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowBlousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
