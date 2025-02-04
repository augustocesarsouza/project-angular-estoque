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

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalMasculine = jasmine.createSpy('getContainerModalMasculine');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
