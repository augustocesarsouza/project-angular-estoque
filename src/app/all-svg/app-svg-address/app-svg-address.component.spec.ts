import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSvgAddressComponent } from './app-svg-address.component';

describe('AppSvgAddressComponent', () => {
  let component: AppSvgAddressComponent;
  let fixture: ComponentFixture<AppSvgAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSvgAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSvgAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
