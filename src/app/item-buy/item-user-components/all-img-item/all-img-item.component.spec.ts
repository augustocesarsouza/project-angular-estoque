import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllImgItemComponent } from './all-img-item.component';

describe('AllImgItemComponent', () => {
  let component: AllImgItemComponent;
  let fixture: ComponentFixture<AllImgItemComponent>;

  const imgProductAll: string[] = ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683876/imgs-backend-estoque/images-item/lold7rshovjrq9tv8ndb.png",
    "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1740683877/imgs-backend-estoque/images-item/wkew9znjwnxthsrkqgql.png"
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllImgItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllImgItemComponent);
    component = fixture.componentInstance;

    component.imgProductAll = imgProductAll;

    component.updateValueWhichIndexImgIs = jasmine.createSpy('updateValueWhichIndexImgIs');
    component.updateValueWhichImgShowUser = jasmine.createSpy('updateValueWhichImgShowUser');
    component.getValueContainerImgHighlight = jasmine.createSpy('getValueContainerImgHighlight');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all imgs', () => {
    const imgs = fixture.nativeElement.querySelectorAll('.container-all-imgs-item > div > img');
    expect(imgs[0].src).toBe(imgProductAll[0]);
    expect(imgs[1].src).toBe(imgProductAll[1]);
  });
});
