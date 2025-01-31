import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLoupeComponent } from './svg-loupe.component';

describe('SvgLoupeComponent', () => {
  let component: SvgLoupeComponent;
  let fixture: ComponentFixture<SvgLoupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLoupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
