import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseItemComponent } from './blouse-item.component';

describe('BlouseItemComponent', () => {
  let component: BlouseItemComponent;
  let fixture: ComponentFixture<BlouseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlouseItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlouseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
