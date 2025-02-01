import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagEmptyComponent } from './bag-empty.component';

describe('BagEmptyComponent', () => {
  let component: BagEmptyComponent;
  let fixture: ComponentFixture<BagEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
