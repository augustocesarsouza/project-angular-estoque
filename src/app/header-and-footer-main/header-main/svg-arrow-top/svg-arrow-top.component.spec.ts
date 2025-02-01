import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowTopComponent } from './svg-arrow-top.component';

describe('SvgArrowTopComponent', () => {
  let component: SvgArrowTopComponent;
  let fixture: ComponentFixture<SvgArrowTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgArrowTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
