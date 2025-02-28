import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsItemComponent } from './colors-item.component';

describe('ColorsItemComponent', () => {
  let component: ColorsItemComponent;
  let fixture: ComponentFixture<ColorsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
