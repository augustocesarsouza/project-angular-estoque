import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Item } from '../../interface-entity/item';

@Component({
  selector: 'app-you-would-like-receiver-news',
  templateUrl: './you-would-like-receiver-news.component.html',
  styleUrl: './you-would-like-receiver-news.component.scss'
})
export class YouWouldLikeReceiverNewsComponent {
  @Input() item!: Item;
  NameFullError: null | boolean = null;
  YourEmailFullError: null | boolean = null;
  isChecked = false;
  @ViewChild('labelCheckbox') labelCheckbox!: ElementRef<HTMLLabelElement>;

  onClickSignUp(inputName: HTMLInputElement, inputYourEmail: HTMLInputElement, divNameInput: HTMLDivElement, divContainerInputName: HTMLDivElement,
    divTypeYourEmailInput: HTMLDivElement, divContainerInputTypeYourEmail: HTMLDivElement
  ){
    const valueInputName = inputName.value;
    const valueInputYourEmaiil = inputYourEmail.value;

    let canISignUpName = false;
    let canISignUpYourEmail = false;

    if(valueInputName.length <= 2){
      divNameInput.style.display = 'block';

      divNameInput.style.color = "rgba(255, 0, 0, 0.644)";
      divContainerInputName.classList.add('input-error-placeholder');
      canISignUpName = false;
      this.NameFullError = true;
    }else {
      divNameInput.style.display = 'block';

      divNameInput.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerInputName.classList.remove('input-error-placeholder');
      canISignUpName = true;
      this.NameFullError = false;
    }

    if(valueInputYourEmaiil.length <= 2 || !valueInputYourEmaiil.includes("@") || !valueInputYourEmaiil.includes("gmail.com") && !valueInputYourEmaiil.includes("hotmail.com")){
      divTypeYourEmailInput.style.display = 'block';

      divTypeYourEmailInput.style.color = "rgba(255, 0, 0, 0.644)";
      divContainerInputTypeYourEmail.classList.add('input-error-placeholder');
      canISignUpYourEmail = false;
      this.YourEmailFullError = true;
    }else {
      divTypeYourEmailInput.style.display = 'block';

      divTypeYourEmailInput.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerInputTypeYourEmail.classList.remove('input-error-placeholder');
      canISignUpYourEmail = true;
      this.YourEmailFullError = false;
    }

    if (this.isChecked) {
      this.labelCheckbox.nativeElement.style.color = "black";
    } else {
      this.labelCheckbox.nativeElement.style.color = "red";
    }

    if(canISignUpYourEmail && canISignUpName && this.isChecked){
      console.log(valueInputName);
      console.log(valueInputYourEmaiil);
    }
  }

  changeInputName(e: Event, divNameInput: HTMLDivElement, divContainerInputName: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 2){
      divNameInput.style.display = 'block';

      divNameInput.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerInputName.classList.remove('input-error-placeholder');

      this.NameFullError = false;
    }else {
      divNameInput.style.display = 'block';

      divNameInput.style.color = "rgba(255, 0, 0, 0.644)";
      divContainerInputName.classList.add('input-error-placeholder');

      this.NameFullError = true;
    }

    if(input.value.length <= 0){
      divNameInput.style.display = 'none';
      this.NameFullError = null;
    }
  }

  changeInputTypeYourEmail(e: Event, divTypeYourEmailInput: HTMLDivElement, divContainerInputTypeYourEmail: HTMLDivElement){
    const input = e.target as HTMLInputElement;
    const valueInputYourEmaiil = input.value;

    if(valueInputYourEmaiil.length <= 2 || !valueInputYourEmaiil.includes("@") || !valueInputYourEmaiil.includes("gmail.com") && !valueInputYourEmaiil.includes("hotmail.com")){
      divTypeYourEmailInput.style.display = 'block';

      divTypeYourEmailInput.style.color = "rgba(255, 0, 0, 0.644)";
      divContainerInputTypeYourEmail.classList.add('input-error-placeholder');

      this.YourEmailFullError = true;
    }else {
      divTypeYourEmailInput.style.display = 'block';

      divTypeYourEmailInput.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerInputTypeYourEmail.classList.remove('input-error-placeholder');

      this.YourEmailFullError = false;
    }

    if(input.value.length <= 0){
      divTypeYourEmailInput.style.display = 'none';
      this.YourEmailFullError = null;
    }
  }

  onCheckboxChange() {
    if (this.isChecked) {
      this.labelCheckbox.nativeElement.style.color = "black";
    } else {
      this.labelCheckbox.nativeElement.style.color = "red";
    }
  }
}
