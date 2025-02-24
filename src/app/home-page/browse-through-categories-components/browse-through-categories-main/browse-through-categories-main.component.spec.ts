import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseThroughCategoriesMainComponent } from './browse-through-categories-main.component';

describe('BrowseThroughCategoriesMainComponent', () => {
  let component: BrowseThroughCategoriesMainComponent;
  let fixture: ComponentFixture<BrowseThroughCategoriesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseThroughCategoriesMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseThroughCategoriesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header browse through categories', () => {
    const header = fixture.nativeElement.querySelector('.container-browse-through-categories > h1');
    expect(header.textContent).toBe("Navegue pelas Categorias");
  });

  it('should render svg left', () => {
    const svg = fixture.nativeElement.querySelector('.container-arrow-left');
    expect(svg).not.toBeNull();
  });

  it('should render svg right', () => {
    const svg = fixture.nativeElement.querySelector('.container-arrow-right');
    expect(svg).not.toBeNull();
  });

  it('should render imgs', () => {
    const imgs = fixture.nativeElement.querySelectorAll('.container-imgs-categories > img');
    expect(imgs.length).toBe(10);
  });
});
