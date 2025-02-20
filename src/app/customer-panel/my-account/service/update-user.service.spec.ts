import { TestBed } from '@angular/core/testing';

import { UpdateUserService } from './update-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateUserService', () => {
  let service: UpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UpdateUserService],
    });
    service = TestBed.inject(UpdateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
