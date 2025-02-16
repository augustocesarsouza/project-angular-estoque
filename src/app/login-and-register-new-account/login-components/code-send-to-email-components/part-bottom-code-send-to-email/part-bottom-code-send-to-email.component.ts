import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-part-bottom-code-send-to-email',
  templateUrl: './part-bottom-code-send-to-email.component.html',
  styleUrl: './part-bottom-code-send-to-email.component.scss'
})
export class PartBottomCodeSendToEmailComponent {
  @Input() onClickResendCode!: () => void;
  @Input() clickNextStep!: () => void;
  @Input() codeFoundSuccessfully!: boolean;
  @Input() secondsPass!: number;
}
