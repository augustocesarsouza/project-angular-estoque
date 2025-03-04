import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgExit2Component } from './svg-exit-2.component';

describe('SvgExit2Component', () => {
  let component: SvgExit2Component;
  let fixture: ComponentFixture<SvgExit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgExit2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgExit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
