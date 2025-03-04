import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOnlineComponent } from './chat-online.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('ChatOnlineComponent', () => {
  let component: ChatOnlineComponent;
  let fixture: ComponentFixture<ChatOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ChatOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatOnlineComponent);
    component = fixture.componentInstance;

    component.getContainerChatOnline = jasmine.createSpy('getContainerChatOnline');
    component.getContainerChatOnlineMinimize = jasmine.createSpy('getContainerChatOnlineMinimize');
    component.getContainerChatOnline = jasmine.createSpy('getContainerChatOnline');
    component.containerModalChatOnline = document.createElement('div');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg message', () => {
    const svg = fixture.nativeElement.querySelector('.container-chat-online-minimize > app-svg-message');
    expect(svg).not.toBeNull();
  });

  it('should render span CHAT ONLINE', () => {
    const span = fixture.nativeElement.querySelector('.container-chat-online-minimize > span');
    expect(span.textContent.trim()).toBe("CHAT ONLINE");
  });

  it('should render chat online official svg message', () => {
    const svg = fixture.nativeElement.querySelector('.container-chat-online > app-svg-message');
    expect(svg).not.toBeNull();
  });

  it('should render span CHAT ONLINE', () => {
    const span = fixture.nativeElement.querySelector('.container-chat-online > span');
    expect(span.textContent.trim()).toBe("CHAT ONLINE");
  });

  it('should render span loading', () => {
    component.firstClickMessage = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-chat-online > span');
    expect(span.textContent.trim()).toBe("CARREGANDO...");
  });
});
