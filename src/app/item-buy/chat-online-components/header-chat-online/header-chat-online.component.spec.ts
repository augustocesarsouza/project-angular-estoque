import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChatOnlineComponent } from './header-chat-online.component';
import { ElementRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderChatOnlineComponent', () => {
  let component: HeaderChatOnlineComponent;
  let fixture: ComponentFixture<HeaderChatOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [HeaderChatOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderChatOnlineComponent);
    component = fixture.componentInstance;

    component.containerChatOnline = new ElementRef(document.createElement('div'));
    component.containerChatOnlineMinimize = new ElementRef(document.createElement('div'));
    component.containerModalChatOnline = document.createElement('div');

    component.selectYouAre = document.createElement('select');
    component.inputFirstName = document.createElement('input');
    component.inputLastName = document.createElement('input');
    component.inputEmail = document.createElement('input');
    component.inputCpfChatOnline = document.createElement('input');
    component.inputCellPhone = document.createElement('input');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span chat', () => {
    const span = fixture.nativeElement.querySelector('.header-chat-online > span');
    expect(span.textContent.trim()).toBe("CHAT");
  });

  it('should render svg-minimize', () => {
    const svg = fixture.nativeElement.querySelector('.container-minimize-and-exit-svg > app-svg-minimize');
    expect(svg).not.toBeNull();
  });

  it('should render svg-exit-2', () => {
    const svg = fixture.nativeElement.querySelector('.container-minimize-and-exit-svg > app-svg-exit-2');
    expect(svg).not.toBeNull();
  });
});
