import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChatOnlineComponent } from './modal-chat-online.component';
import { ElementRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { HeaderChatOnlineComponent } from '../header-chat-online/header-chat-online.component';

describe('ModalChatOnlineComponent', () => {
  let component: ModalChatOnlineComponent;
  let fixture: ComponentFixture<ModalChatOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ModalChatOnlineComponent, HeaderChatOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChatOnlineComponent);
    component = fixture.componentInstance;

    component.getContainerModalChatOnline = jasmine.createSpy('getContainerModalChatOnline');
    component.containerChatOnline = new ElementRef(document.createElement('div'));
    component.containerChatOnlineMinimize = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span all join', () => {
    const spans = fixture.nativeElement.querySelectorAll('.span-all-join');

    expect(spans.length).toBe(6);

    const spanElements = ["Você é um(a)...", "Primeiro Nome", "Sobrenome", "Email", "CPF", "Telefone"];

    for (let i = 0; i < spans.length; i++) {
      const element = spans[i];
      expect(element.textContent.trim()).toBe(spanElements[i]);
    }
  });

  it('should render select', () => {
    const select = fixture.nativeElement.querySelector('.container-you-are-client-or-shop > select');
    expect(select).not.toBeNull();
  });

  it('should render all input', () => {
    const inputs = fixture.nativeElement.querySelectorAll('.input-all');
    expect(inputs.length).toBe(5);
  });

  it('should render button start', () => {
    const button = fixture.nativeElement.querySelector('.container-button-start-the-chat > button');
    expect(button.textContent.trim()).toBe("INICIAR O CHAT");
  });
});
