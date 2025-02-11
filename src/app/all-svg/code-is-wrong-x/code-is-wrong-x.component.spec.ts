import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeIsWrongXComponent } from './code-is-wrong-x.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CodeIsWrongXComponent', () => {
  let component: CodeIsWrongXComponent;
  let fixture: ComponentFixture<CodeIsWrongXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeIsWrongXComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeIsWrongXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
