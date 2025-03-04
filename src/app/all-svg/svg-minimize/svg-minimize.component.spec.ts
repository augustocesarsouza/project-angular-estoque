import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMinimizeComponent } from './svg-minimize.component';

describe('SvgMinimizeComponent', () => {
  let component: SvgMinimizeComponent;
  let fixture: ComponentFixture<SvgMinimizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgMinimizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgMinimizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
