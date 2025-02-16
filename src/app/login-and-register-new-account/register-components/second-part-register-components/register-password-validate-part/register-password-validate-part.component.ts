import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-password-validate-part',
  templateUrl: './register-password-validate-part.component.html',
  styleUrl: './register-password-validate-part.component.scss'
})
export class RegisterPasswordValidatePartComponent implements AfterViewInit {
  @ViewChild('spanMinimumEightCharacter') spanMinimumEightCharacter!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneLetterUpperCase') spanOneLetterUpperCase!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneLetterLowerCase') spanOneLetterLowerCase!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanMinimumOneNumber') spanMinimumOneNumber!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOneSpecialCharacter') spanOneSpecialCharacter!: ElementRef<HTMLSpanElement>;

  @Input() verificarSelecao!: (event: Event, checkbox: string) => void;

  @Input() getSpanMinimumEightCharacter!: (span: HTMLSpanElement) => void;
  @Input() getSpanOneLetterUpperCase!: (span: HTMLSpanElement) => void;
  @Input() getSpanOneLetterLowerCase!: (span: HTMLSpanElement) => void;
  @Input() getSpanMinimumOneNumber!: (span: HTMLSpanElement) => void;
  @Input() getSpanOneSpecialCharacter!: (span: HTMLSpanElement) => void;

  ngAfterViewInit(): void {
    this.getSpanMinimumEightCharacter(this.spanMinimumEightCharacter.nativeElement);
    this.getSpanOneLetterUpperCase(this.spanOneLetterUpperCase.nativeElement);
    this.getSpanOneLetterLowerCase(this.spanOneLetterLowerCase.nativeElement);
    this.getSpanMinimumOneNumber(this.spanMinimumOneNumber.nativeElement);
    this.getSpanOneSpecialCharacter(this.spanOneSpecialCharacter.nativeElement);
  }
}
