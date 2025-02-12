import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountLogInComponent } from './modal-account-log-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { SvgArrowTopComponent } from '../svg-arrow-top/svg-arrow-top.component';

describe('ModalAccountLogInComponent', () => {
  let component: ModalAccountLogInComponent;
  let fixture: ComponentFixture<ModalAccountLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalAccountLogInComponent, SvgArrowTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAccountLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
