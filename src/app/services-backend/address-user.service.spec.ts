import { TestBed } from '@angular/core/testing';

import { AddressUserService } from './address-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddressUserService', () => {
  let service: AddressUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddressUserService],
    });
    service = TestBed.inject(AddressUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
