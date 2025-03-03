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

  it('should render button buy', () => {
    const button = fixture.nativeElement.querySelector('.container-buy-and-heart > button');

    expect(button.textContent.trim()).toBe("COMPRAR");
  });

  it('should render container heart', () => {
    const heart = fixture.nativeElement.querySelector('.container-heart');

    expect(heart).not.toBeNull();
  });
});
