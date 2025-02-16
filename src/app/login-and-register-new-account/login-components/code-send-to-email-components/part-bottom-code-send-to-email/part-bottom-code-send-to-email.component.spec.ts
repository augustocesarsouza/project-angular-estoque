import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartBottomCodeSendToEmailComponent } from './part-bottom-code-send-to-email.component';

describe('PartBottomCodeSendToEmailComponent', () => {
  let component: PartBottomCodeSendToEmailComponent;
  let fixture: ComponentFixture<PartBottomCodeSendToEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartBottomCodeSendToEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartBottomCodeSendToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
