import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesComponent } from './sizes.component';

describe('SizesComponent', () => {
  let component: SizesComponent;
  let fixture: ComponentFixture<SizesComponent>;

  const sizes = ['PP', 'P', 'M', 'G', 'GG'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizesComponent);
    component = fixture.componentInstance;

    component.sizes = sizes;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span size item top part', () => {
    const span = fixture.nativeElement.querySelector('.span-size-item');
    expect(span.textContent).toBe(`Tamanho`);
  });

  it('should render span size item top part', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-size > span');

    for (let i = 0; i < spans.length; i++) {
      const element = spans[i];
      expect(element.textContent.trim()).toBe(sizes[i]);
    }
  });
});
