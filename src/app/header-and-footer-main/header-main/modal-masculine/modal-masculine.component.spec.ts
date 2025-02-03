import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMasculineComponent } from './modal-masculine.component';

describe('ModalMasculineComponent', () => {
  let component: ModalMasculineComponent;
  let fixture: ComponentFixture<ModalMasculineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMasculineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMasculineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
