import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgShowComponent } from './img-show.component';

describe('ImgShowComponent', () => {
  let component: ImgShowComponent;
  let fixture: ComponentFixture<ImgShowComponent>;

  const imgProductAll: string[] = ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683876/imgs-backend-estoque/images-item/lold7rshovjrq9tv8ndb.png",
    "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683877/imgs-backend-estoque/images-item/wkew9znjwnxthsrkqgql.png"
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgShowComponent);
    component = fixture.componentInstance;

    component.whichImgShowUser = imgProductAll[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img main', () => {
    const img = fixture.nativeElement.querySelector('.image-container-to-zoom > img');
    expect(img.src).toBe(imgProductAll[0]);
  });
});
