import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLelisLelisHomeImgBoboComponent } from './branch-lelis-lelis-home-img-bobo.component';

describe('BranchLelisLelisHomeImgBoboComponent', () => {
  let component: BranchLelisLelisHomeImgBoboComponent;
  let fixture: ComponentFixture<BranchLelisLelisHomeImgBoboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchLelisLelisHomeImgBoboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchLelisLelisHomeImgBoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
