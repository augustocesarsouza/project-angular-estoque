import { TestBed } from '@angular/core/testing';

import { ObjCodeUserEmailToRegisterAccountService } from './obj-code-user-email-to-register-account.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ObjCodeUserEmailToRegisterAccountService', () => {
  let service: ObjCodeUserEmailToRegisterAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ObjCodeUserEmailToRegisterAccountService],
        });
    service = TestBed.inject(ObjCodeUserEmailToRegisterAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
