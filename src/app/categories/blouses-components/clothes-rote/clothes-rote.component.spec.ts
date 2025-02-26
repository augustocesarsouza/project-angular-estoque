import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesRoteComponent } from './clothes-rote.component';

describe('ClothesRoteComponent', () => {
  let component: ClothesRoteComponent;
  let fixture: ComponentFixture<ClothesRoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothesRoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesRoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
