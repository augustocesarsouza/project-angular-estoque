import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNewsComponent } from './select-news.component';

describe('SelectNewsComponent', () => {
  let component: SelectNewsComponent;
  let fixture: ComponentFixture<SelectNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all options from select', () => {
    const options = fixture.nativeElement.querySelectorAll('select option');
    expect(options.length).toBe(4); // Confere se são 4 opções
  });
});
