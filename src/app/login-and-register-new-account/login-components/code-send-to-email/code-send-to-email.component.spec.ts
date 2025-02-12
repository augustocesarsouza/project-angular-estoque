import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSendToEmailComponent } from './code-send-to-email.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('CodeSendToEmailComponent', () => {
  let component: CodeSendToEmailComponent;
  let fixture: ComponentFixture<CodeSendToEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CodeSendToEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSendToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
