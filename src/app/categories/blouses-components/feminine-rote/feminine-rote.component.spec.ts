import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeminineRoteComponent } from './feminine-rote.component';

describe('FeminineRoteComponent', () => {
  let component: FeminineRoteComponent;
  let fixture: ComponentFixture<FeminineRoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeminineRoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeminineRoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
