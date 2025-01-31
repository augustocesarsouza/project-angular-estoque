import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMicrophoneComponent } from './svg-microphone.component';

describe('SvgMicrophoneComponent', () => {
  let component: SvgMicrophoneComponent;
  let fixture: ComponentFixture<SvgMicrophoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgMicrophoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgMicrophoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
