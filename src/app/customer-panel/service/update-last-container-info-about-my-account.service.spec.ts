import { TestBed } from '@angular/core/testing';

import { UpdateLastContainerInfoAboutMyAccountService } from './update-last-container-info-about-my-account.service';

describe('UpdateLastContainerInfoAboutMyAccountService', () => {
  let service: UpdateLastContainerInfoAboutMyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateLastContainerInfoAboutMyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
