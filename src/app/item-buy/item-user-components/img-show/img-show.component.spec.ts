import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgShowComponent } from './img-show.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('ImgShowComponent', () => {
  let component: ImgShowComponent;
  let fixture: ComponentFixture<ImgShowComponent>;

  const imgProductAll: string[] = ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683876/imgs-backend-estoque/images-item/lold7rshovjrq9tv8ndb.png",
    "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683877/imgs-backend-estoque/images-item/wkew9znjwnxthsrkqgql.png"
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ImgShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgShowComponent);
    component = fixture.componentInstance;

    component.whichImgShowUser = imgProductAll[0];

    component.updateValueWhichIndexImgIs = jasmine.createSpy('updateValueWhichIndexImgIs');
    component.updateValueWhichImgShowUser = jasmine.createSpy('updateValueWhichImgShowUser');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img main', () => {
    const img = fixture.nativeElement.querySelector('.image-container-to-zoom > img');
    expect(img.src).toBe(imgProductAll[0]);
  });

  it('should render all svg left and right', () => {
    const svgs = fixture.nativeElement.querySelectorAll('.container-img-show > app-svg-arrow-fontawesome');
    expect(svgs.length).toBe(2);
  });
});
