import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetNumberComplementNeighborhoodAndSetAsDefaultComponent } from './street-number-complement-neighborhood-and-set-as-default.component';

describe('StreetNumberComplementNeighborhoodAndSetAsDefaultComponent', () => {
  let component: StreetNumberComplementNeighborhoodAndSetAsDefaultComponent;
  let fixture: ComponentFixture<StreetNumberComplementNeighborhoodAndSetAsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreetNumberComplementNeighborhoodAndSetAsDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreetNumberComplementNeighborhoodAndSetAsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
