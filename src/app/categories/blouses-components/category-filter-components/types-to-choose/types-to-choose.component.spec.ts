import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesToChooseComponent } from './types-to-choose.component';

describe('TypesToChooseComponent', () => {
  let component: TypesToChooseComponent;
  let fixture: ComponentFixture<TypesToChooseComponent>;

  const typeSpan = "Cor";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesToChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesToChooseComponent);
    component = fixture.componentInstance;

    component.typeSpan = typeSpan;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span types to choose', () => {
    const span = fixture.nativeElement.querySelector('.container-types-to-choose > span');
    expect(span.textContent.trim()).toBe(typeSpan);
  });

  it('should render svg types to choose', () => {
    const svg = fixture.nativeElement.querySelector('.container-types-to-choose > svg');
    expect(svg).not.toBeNull();
  });
});
