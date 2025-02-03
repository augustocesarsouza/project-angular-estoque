import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChildrenComponent } from './modal-children.component';

describe('ModalChildrenComponent', () => {
  let component: ModalChildrenComponent;
  let fixture: ComponentFixture<ModalChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChildrenComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalChildren = jasmine.createSpy('getContainerModalChildren');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
