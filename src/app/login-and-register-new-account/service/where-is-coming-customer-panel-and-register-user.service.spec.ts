import { TestBed } from '@angular/core/testing';

import { WhereIsComingCustomerPanelAndRegisterUserService } from './where-is-coming-customer-panel-and-register-user.service';

describe('WhereIsComingCustomerPanelAndRegisterUserService', () => {
  let service: WhereIsComingCustomerPanelAndRegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhereIsComingCustomerPanelAndRegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
