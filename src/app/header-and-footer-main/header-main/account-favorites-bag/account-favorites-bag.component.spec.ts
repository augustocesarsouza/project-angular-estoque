import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFavoritesBagComponent } from './account-favorites-bag.component';

describe('AccountFavoritesBagComponent', () => {
  let component: AccountFavoritesBagComponent;
  let fixture: ComponentFixture<AccountFavoritesBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountFavoritesBagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountFavoritesBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
