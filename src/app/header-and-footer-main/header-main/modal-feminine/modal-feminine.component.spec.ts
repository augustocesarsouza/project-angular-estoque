import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFeminineComponent } from './modal-feminine.component';

describe('ModalFeminineComponent', () => {
  let component: ModalFeminineComponent;
  let fixture: ComponentFixture<ModalFeminineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFeminineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFeminineComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalFeminine = jasmine.createSpy('getContainerModalFeminine');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
