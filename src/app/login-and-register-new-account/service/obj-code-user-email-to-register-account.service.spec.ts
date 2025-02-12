import { TestBed } from '@angular/core/testing';

import { ObjCodeUserEmailToRegisterAccountService } from './obj-code-user-email-to-register-account.service';

describe('ObjCodeUserEmailToRegisterAccountService', () => {
  let service: ObjCodeUserEmailToRegisterAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjCodeUserEmailToRegisterAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
