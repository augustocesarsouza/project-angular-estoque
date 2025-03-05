import { Component, ElementRef, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { Item } from '../../../interface-entity/item';
import { ReviewItemService } from '../../../services-backend/review-item.service';
import { ReviewItem } from '../../../interface-entity/review-item';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../../login-and-register-new-account/service/google-api.service';
import { UserLocalStorage } from '../../../function-user/get-user-local-storage/user-local-storage';
import { VerifyTokenIsExpired } from '../../../function-user/function-token-user/verify-token-is-expired';
import { User } from '../../../interface-entity/user';

@Component({
  selector: 'app-modal-reviews',
  templateUrl: './modal-reviews.component.html',
  styleUrl: './modal-reviews.component.scss'
})
export class ModalReviewsComponent implements AfterViewInit, OnInit {
  @Input() changeValueModalReviews!: (value: boolean) => void;
  @Input() getCreatedNewReviewItem!: (value: boolean) => void;
  @Input() item!: Item;
  NameFullError: null | boolean = null;
  EmailError: null | boolean = null;
  ReviewTitleError: null | boolean = null;
  TextareaReviewError: null | boolean = null;
  clickRecaptcha = false;

  user!: User;
  quantityReview: Record<string, number> = {};

  @ViewChild('inputNameFull') inputNameFull!: ElementRef<HTMLInputElement>;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('inputReviewTitle') inputReviewTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('textareaReview') textareaReview!: ElementRef<HTMLTextAreaElement>;

  @ViewChild('buttonSubmitEvaluation') buttonSubmitEvaluation!: ElementRef<HTMLButtonElement>;

  @ViewChild('divContainerInputNameFull') divContainerInputNameFull!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerInputEmail') divContainerInputEmail!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerInputReviewTitle') divContainerInputReviewTitle!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private googleApiService: GoogleApiService, private reviewItemService: ReviewItemService){}

  ngOnInit(): void {
    this.getQuantityReview = this.getQuantityReview.bind(this);

    this.quantityReview['fitRating'] = 0;
    this.quantityReview['qualityRating'] = 0;
    this.quantityReview['priceRating'] = 0;

    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user){
        const token = user.token;

        if(token){
          const tokenIsExpired = VerifyTokenIsExpired(token);

          if(tokenIsExpired){
            localStorage.removeItem('user');
            this.router.navigate(['/']);
            return;
          }

          this.user = user;
        }
      }
    }
  }

  ngAfterViewInit(): void {
    if (typeof window === "undefined" || typeof document === "undefined")return;

    document.body.style.overflow = "hidden";
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

  changeTextareaDescription(e: Event, divEmailInput: HTMLTextAreaElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 1){
      divEmailInput.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.TextareaReviewError = false;
    }else {
      divEmailInput.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.TextareaReviewError = true;
    }

    if(input.value.length <= 0){
      this.TextareaReviewError = null;
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

    const inputNameValue = this.inputNameFull.nativeElement.value;
    const inputEmailValue = this.inputEmail.nativeElement.value;
    const inputReviewTitleValue = this.inputReviewTitle.nativeElement.value;
    const inputReviewValue = this.textareaReview.nativeElement.value;

    const inputNameFull = this.inputNameFull.nativeElement;
    const inputEmail = this.inputEmail.nativeElement;
    const inputReviewTitle = this.inputReviewTitle.nativeElement;

    let nameUserIsValid = false;
    let emailIsValid = false;
    let reviewTitleIsValid = false;
    let reviewIsValid = false;

    if(inputNameValue.length <= 1){
      this.NameFullError = true;
      this.divContainerInputNameFull.nativeElement.style.borderColor = "red";
      inputNameFull.classList.add('placeholder-red');
      nameUserIsValid = false;
    }else {
      nameUserIsValid = true;
    }

    if(inputEmailValue.length <= 1){
      this.EmailError = true;
      this.divContainerInputEmail.nativeElement.style.borderColor = "red";
      inputEmail.classList.add('placeholder-red');
      emailIsValid = false;
    }else {
      emailIsValid = true;
    }

    if(inputReviewTitleValue.length <= 1){
      this.ReviewTitleError = true;
      this.divContainerInputReviewTitle.nativeElement.style.borderColor = "red";
      inputReviewTitle.classList.add('placeholder-red');
      reviewTitleIsValid = false;
    }else {
      reviewTitleIsValid = true;
    }

    if(inputReviewValue.length <= 1){
      this.TextareaReviewError = true;

      this.textareaReview.nativeElement.style.borderColor = "red";
      reviewIsValid = false;
    }else {
      reviewIsValid = true;
    }

    if(nameUserIsValid && emailIsValid && reviewTitleIsValid && reviewIsValid){
      const review: ReviewItem = {
        id: "",
        nameUser: this.inputNameFull.nativeElement.value,
        email: this.inputEmail.nativeElement.value,
        reviewTitle: this.inputReviewTitle.nativeElement.value,
        description: this.textareaReview.nativeElement.value,
        fitRating: this.quantityReview['fitRating'],
        qualityRating: this.quantityReview['qualityRating'],
        priceRating: this.quantityReview['priceRating'],
        itemsId: this.item.id
      };

      this.reviewItemService.createAddress(review, this.user).subscribe({
        next: () => {
          this.changeValueModalReviews(false);
          this.getCreatedNewReviewItem(true);
        },
        error: error => {
          if(error.status === 400){
            console.log(error);
          }

          if(error.status === 403){
            localStorage.removeItem('user');
            this.router.navigate(['/buyer/login']);
          }
        }
      });
    }
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

  getQuantityReview(whichNameReview: string, quantityStar: number){
    if(whichNameReview === "Caimento:"){
      this.quantityReview['fitRating'] = quantityStar;
    }

    if(whichNameReview === "Qualidade:"){
      this.quantityReview['qualityRating'] = quantityStar;
    }

    if(whichNameReview === "Preço:"){
      this.quantityReview['priceRating'] = quantityStar;
    }
    // console.log(quantityStar);
  }
}
