import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSendToEmailComponent } from './code-send-to-email.component';

describe('CodeSendToEmailComponent', () => {
  let component: CodeSendToEmailComponent;
  let fixture: ComponentFixture<CodeSendToEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
