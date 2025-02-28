import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBrandNameItemComponent } from './header-brand-name-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderBrandNameItemComponent', () => {
  let component: HeaderBrandNameItemComponent;
  let fixture: ComponentFixture<HeaderBrandNameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
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
