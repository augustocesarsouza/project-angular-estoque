import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowFontawesomeComponent } from './svg-arrow-fontawesome.component';

describe('SvgArrowFontawesomeComponent', () => {
  let component: SvgArrowFontawesomeComponent;
  let fixture: ComponentFixture<SvgArrowFontawesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgArrowFontawesomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowFontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
