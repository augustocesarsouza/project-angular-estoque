import { TestBed } from '@angular/core/testing';

import { WhichUrlWasClickedCustomerPanelService } from './which-url-was-clicked-customer-panel.service';

describe('WhichUrlWasClickedCustomerPanelService', () => {
  let service: WhichUrlWasClickedCustomerPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhichUrlWasClickedCustomerPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
