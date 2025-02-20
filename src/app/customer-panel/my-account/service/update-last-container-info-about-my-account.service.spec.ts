import { TestBed } from '@angular/core/testing';

import { UpdateLastContainerInfoAboutMyAccountService } from './update-last-container-info-about-my-account.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateLastContainerInfoAboutMyAccountService', () => {
  let service: UpdateLastContainerInfoAboutMyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UpdateLastContainerInfoAboutMyAccountService],
    });
    service = TestBed.inject(UpdateLastContainerInfoAboutMyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
