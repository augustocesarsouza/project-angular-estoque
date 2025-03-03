import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsItemComponent } from './colors-item.component';

describe('ColorsItemComponent', () => {
  let component: ColorsItemComponent;
  let fixture: ComponentFixture<ColorsItemComponent>;

  const colorsItem = ["black", "red"];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsItemComponent);
    component = fixture.componentInstance;

    component.colorsItem = colorsItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header colors item', () => {
    const header = fixture.nativeElement.querySelector('.container-colors-item > h1');
    expect(header.textContent.trim()).toBe("COR: Preto");
  });

  it('should render all colors', () => {
    const divs = fixture.nativeElement.querySelectorAll('.container-all-color > div');
    expect(divs.length).toBe(2);
  });
});
