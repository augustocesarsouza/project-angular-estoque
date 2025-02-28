import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBrandNameItemComponent } from './header-brand-name-item.component';

describe('HeaderBrandNameItemComponent', () => {
  let component: HeaderBrandNameItemComponent;
  let fixture: ComponentFixture<HeaderBrandNameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBrandNameItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBrandNameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
