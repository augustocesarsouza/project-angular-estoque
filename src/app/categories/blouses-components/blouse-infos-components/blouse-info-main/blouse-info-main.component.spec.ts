import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlouseInfoMainComponent } from './blouse-info-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { BlouseFirstComponent } from '../blouse-first/blouse-first.component';
import { SvgArrowBlousesComponent } from '../../svg-arrow-blouses/svg-arrow-blouses.component';

describe('BlouseInfoMainComponent', () => {
  let component: BlouseInfoMainComponent;
  let fixture: ComponentFixture<BlouseInfoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BlouseInfoMainComponent, BlouseFirstComponent, SvgArrowBlousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlouseInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
