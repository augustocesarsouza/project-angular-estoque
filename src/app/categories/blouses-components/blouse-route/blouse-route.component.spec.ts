import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseRouteComponent } from './blouse-route.component';

describe('BlouseRouteComponent', () => {
  let component: BlouseRouteComponent;
  let fixture: ComponentFixture<BlouseRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlouseRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlouseRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
