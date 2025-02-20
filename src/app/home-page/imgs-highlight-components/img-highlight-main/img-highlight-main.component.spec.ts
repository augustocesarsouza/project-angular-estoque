import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHighlightMainComponent } from './img-highlight-main.component';

describe('ImgHighlightMainComponent', () => {
  let component: ImgHighlightMainComponent;
  let fixture: ComponentFixture<ImgHighlightMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgHighlightMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgHighlightMainComponent);
    component = fixture.componentInstance;
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
    expect(imgs[0].src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740056375/imgs-backend-estoque/img-home-page/859_banner638754756089097391_g3zqvy.webp");
    expect(imgs[1].src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740056380/imgs-backend-estoque/img-home-page/1651_banner638749719514083764_ujkvcx.webp");
  });

  it('should render all imgs length', () => {
    const imgs = fixture.nativeElement.querySelectorAll('.container-carousel-custom > img');
    expect(imgs.length).toBe(2);
  });
});
