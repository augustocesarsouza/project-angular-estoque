import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-header-chat-online',
  templateUrl: './header-chat-online.component.html',
  styleUrl: './header-chat-online.component.scss'
})
export class HeaderChatOnlineComponent {
  @Input() containerChatOnline!: ElementRef<HTMLDivElement>;
  @Input() containerChatOnlineMinimize!: ElementRef<HTMLDivElement>;
  @Input() containerModalChatOnline!: HTMLDivElement;

  @Input() selectYouAre!: HTMLSelectElement;
  @Input() inputFirstName!: HTMLInputElement;
  @Input() inputLastName!: HTMLInputElement;
  @Input() inputEmail!: HTMLInputElement;
  @Input() inputCpfChatOnline!: HTMLInputElement;
  @Input() inputCellPhone!: HTMLInputElement;

  onClickMinimizeModalChat(){
    this.containerChatOnline.nativeElement.style.display = 'none';
    this.containerModalChatOnline.style.display = 'none';
    this.containerChatOnlineMinimize.nativeElement.style.display = 'flex';
  }

  onClickExitModalChat(){
    this.containerChatOnline.nativeElement.style.display = 'flex';
    this.containerModalChatOnline.style.display = 'none';
    this.containerChatOnlineMinimize.nativeElement.style.display = 'none';

    this.selectYouAre.value = 'Cliente';
    this.inputFirstName.value = '';
    this.inputLastName.value = '';
    this.inputEmail.value = '';
    this.inputCpfChatOnline.value = '';
    this.inputCellPhone.value = '';
  }
}
