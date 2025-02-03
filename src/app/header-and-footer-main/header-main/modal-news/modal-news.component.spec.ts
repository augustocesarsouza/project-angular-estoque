import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewsComponent } from './modal-news.component';

describe('ModalNewsComponent', () => {
  let component: ModalNewsComponent;
  let fixture: ComponentFixture<ModalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
