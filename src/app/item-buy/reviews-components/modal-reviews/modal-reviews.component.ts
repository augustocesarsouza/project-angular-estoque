import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-reviews',
  templateUrl: './modal-reviews.component.html',
  styleUrl: './modal-reviews.component.scss'
})
export class ModalReviewsComponent implements AfterViewInit {
  @Input() changeValueModalReviews!: (value: boolean) => void;
  NameFullError: null | boolean = null;
  EmailError: null | boolean = null;
  ReviewTitleError: null | boolean = null;
  clickRecaptcha = false;

  @ViewChild('buttonSubmitEvaluation') buttonSubmitEvaluation!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    if (typeof window === "undefined" || typeof document === "undefined")return;

    document.body.style.overflow = "hidden"; // FAZER TESTES AGORA
  }

  changeInputNameFull(e: Event, divNameInput: HTMLDivElement, divContainerInputNameFull: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 1){
      divNameInput.style.display = 'block';

      divContainerInputNameFull.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.NameFullError = false;
    }else {
      divNameInput.style.display = 'block';

      divContainerInputNameFull.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.NameFullError = true;
    }

    if(input.value.length <= 0){
      divNameInput.style.display = 'none';
      this.NameFullError = null;
    }
  }

  changeInputEmail(e: Event, divEmailInput: HTMLDivElement, divContainerInput: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 1){
      divEmailInput.style.display = 'block';

      divContainerInput.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.EmailError = false;
    }else {
      divEmailInput.style.display = 'block';

      divContainerInput.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.EmailError = true;
    }

    if(input.value.length <= 0){
      divEmailInput.style.display = 'none';
      this.EmailError = null;
    }
  }

  changeInputReviewTitle(e: Event, divEmailInput: HTMLDivElement, divContainerInput: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 1){
      divEmailInput.style.display = 'block';

      divContainerInput.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.ReviewTitleError = false;
    }else {
      divEmailInput.style.display = 'block';

      divContainerInput.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.ReviewTitleError = true;
    }

    if(input.value.length <= 0){
      divEmailInput.style.display = 'none';
      this.ReviewTitleError = null;
    }
  }

  recaptchaCallback = (event: string | null) => {
    if(event){
      this.clickRecaptcha = true;

      const button = this.buttonSubmitEvaluation.nativeElement;
      button.style.backgroundColor = "black";
      button.style.cursor = "pointer";
    }
  };

  onClickSubmitEvaluation() {
    if(!this.clickRecaptcha)return;
    console.log("can submit");
  }

  onMouseEnterSubmitEvaluation(buttonSubmitEvaluation: HTMLButtonElement) {
    if(this.clickRecaptcha){
      buttonSubmitEvaluation.style.opacity = "0.8";
    }
  }

  onMouseLeaveSubmitEvaluation(buttonSubmitEvaluation: HTMLButtonElement) {
    if(this.clickRecaptcha){
      buttonSubmitEvaluation.style.opacity = "1";
    }
  }

  onClickExitModal(){
    this.changeValueModalReviews(false);
  }
}
