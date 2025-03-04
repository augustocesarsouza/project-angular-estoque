import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChatOnlineComponent } from './modal-chat-online.component';

describe('ModalChatOnlineComponent', () => {
  let component: ModalChatOnlineComponent;
  let fixture: ComponentFixture<ModalChatOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalChatOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalChatOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
