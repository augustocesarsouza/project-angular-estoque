import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowRegisterComponent } from './svg-arrow-register.component';

describe('SvgArrowRegisterComponent', () => {
  let component: SvgArrowRegisterComponent;
  let fixture: ComponentFixture<SvgArrowRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgArrowRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
