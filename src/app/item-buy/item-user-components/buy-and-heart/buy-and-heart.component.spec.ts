import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAndHeartComponent } from './buy-and-heart.component';

describe('BuyAndHeartComponent', () => {
  let component: BuyAndHeartComponent;
  let fixture: ComponentFixture<BuyAndHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyAndHeartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyAndHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
