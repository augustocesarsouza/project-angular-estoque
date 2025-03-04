import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-online',
  templateUrl: './chat-online.component.html',
  styleUrl: './chat-online.component.scss'
})
export class ChatOnlineComponent implements OnDestroy, AfterViewInit {
  setTimeoutId!: number;
  firstClickMessage = false;

  @ViewChild('containerChatOnline') containerChatOnline!: ElementRef<HTMLDivElement>;
  @ViewChild('containerChatOnlineMinimize') containerChatOnlineMinimize!: ElementRef<HTMLDivElement>;

  @Input() getContainerChatOnline!: (div: ElementRef<HTMLDivElement>) => void;
  @Input() getContainerChatOnlineMinimize!: (div: ElementRef<HTMLDivElement>) => void;
  @Input() containerModalChatOnline!: HTMLDivElement;

  onClickMessage(){
    this.firstClickMessage = true;

    clearTimeout(this.setTimeoutId);
    this.setTimeoutId = setTimeout(() => {
      this.firstClickMessage = false;
      this.containerChatOnline.nativeElement.style.display = 'none';
      this.containerModalChatOnline.style.display = 'flex';
    }, 500) as unknown as number;
  }

  ngAfterViewInit(): void {
    this.getContainerChatOnline(this.containerChatOnline);
    this.getContainerChatOnlineMinimize(this.containerChatOnlineMinimize);
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutId);
  }
}
