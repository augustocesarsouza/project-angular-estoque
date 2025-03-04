import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChatOnlineComponent } from './header-chat-online.component';

describe('HeaderChatOnlineComponent', () => {
  let component: HeaderChatOnlineComponent;
  let fixture: ComponentFixture<HeaderChatOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderChatOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderChatOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
