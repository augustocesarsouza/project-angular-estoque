import { TestBed } from '@angular/core/testing';

import { WhereIsComingCustomerPanelAndRegisterUserService } from './where-is-coming-customer-panel-and-register-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WhereIsComingCustomerPanelAndRegisterUserService', () => {
  let service: WhereIsComingCustomerPanelAndRegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WhereIsComingCustomerPanelAndRegisterUserService],
    });
    service = TestBed.inject(WhereIsComingCustomerPanelAndRegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
