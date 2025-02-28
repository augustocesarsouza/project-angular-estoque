import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-type-your-cep',
  templateUrl: './type-your-cep.component.html',
  styleUrl: './type-your-cep.component.scss'
})
export class TypeYourCepComponent implements AfterViewInit {
  @ViewChild('inputCep') inputCep!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const inputCepNewAddress = this.inputCep.nativeElement as HTMLInputElement;
      if(inputCepNewAddress){
        const mask = Inputmask({
          mask: '99999-999',
          placeholder: '_____-___',
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputCepNewAddress);
      }
    }, 30);
  }
}
