import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-modal-chat-online',
  templateUrl: './modal-chat-online.component.html',
  styleUrl: './modal-chat-online.component.scss'
})
export class ModalChatOnlineComponent implements AfterViewInit {
  @ViewChild('containerModalChatOnline') containerModalChatOnline!: ElementRef<HTMLDivElement>;

  @Input() getContainerModalChatOnline!: (div: ElementRef<HTMLDivElement>) => void;

  @Input() containerChatOnline!: ElementRef<HTMLDivElement>;
  @Input() containerChatOnlineMinimize!: ElementRef<HTMLDivElement>;

  @ViewChild('selectYouAre') selectYouAre!: ElementRef<HTMLSelectElement>;
  @ViewChild('inputFirstName') inputFirstName!: ElementRef<HTMLInputElement>;
  @ViewChild('inputLastName') inputLastName!: ElementRef<HTMLInputElement>;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCellPhone') inputCellPhone!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCpfChatOnline') inputCpfChatOnline!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.getContainerModalChatOnline(this.containerModalChatOnline);

    const inputCpf = this.inputCpfChatOnline.nativeElement;

    if(inputCpf){
      const mask = Inputmask({
        mask: '999.999.999-99',
        placeholder: '___.___.___-__',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
      mask.mask(inputCpf);
    }
  }
}
