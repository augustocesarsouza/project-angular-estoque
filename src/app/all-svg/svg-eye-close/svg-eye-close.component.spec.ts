import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEyeCloseComponent } from './svg-eye-close.component';

describe('SvgEyeCloseComponent', () => {
  let component: SvgEyeCloseComponent;
  let fixture: ComponentFixture<SvgEyeCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgEyeCloseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgEyeCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
