import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHighlightMainComponent } from './img-highlight-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ImgHighlight } from '../../../interface-entity/img-highlight';

describe('ImgHighlightMainComponent', () => {
  let component: ImgHighlightMainComponent;
  let fixture: ComponentFixture<ImgHighlightMainComponent>;

  const obj: ImgHighlight = {alt: "buy-4-and-pay-for-3",
    id: "fc8bdb85-1202-4ace-b2a2-29e74378c171",
    img: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740137545/imgs-backend-estoque/img-home-page/djzsyhosqlxlji699t2k.jpg"};

  const array: ImgHighlight[] = [];
  array.push(obj);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ImgHighlightMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgHighlightMainComponent);
    component = fixture.componentInstance;

    component.imgsHighlight = array;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg left', () => {
    const svg = fixture.nativeElement.querySelector('.container-arrow-left > svg');
    expect(svg).not.toBeNull();
  });

  it('should render svg right', () => {
    const svg = fixture.nativeElement.querySelector('.container-arrow-right > svg');
    expect(svg).not.toBeNull();
  });

  it('should render all img src', () => {
    const imgs = fixture.nativeElement.querySelectorAll('.container-carousel-custom > img');
    expect(imgs[0].src).toContain(obj.img);
  });

  it('should render all imgs length', () => {
    const imgs = fixture.nativeElement.querySelectorAll('.container-carousel-custom > img');
    expect(imgs.length).toBe(1);
  });
});
