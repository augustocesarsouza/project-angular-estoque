import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBranchComponent } from './modal-branch.component';

describe('ModalBranchComponent', () => {
  let component: ModalBranchComponent;
  let fixture: ComponentFixture<ModalBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBranchComponent);
    component = fixture.componentInstance;

    component.mouseEnterCategory = jasmine.createSpy('mouseEnterCategory');
    component.mouseLeaveCategory = jasmine.createSpy('mouseLeaveCategory');
    component.getContainerModalBranch = jasmine.createSpy('getContainerModalBranch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
