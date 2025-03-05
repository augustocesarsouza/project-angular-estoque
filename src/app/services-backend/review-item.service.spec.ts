import { TestBed } from '@angular/core/testing';

import { ReviewItemService } from './review-item.service';

describe('ReviewItemService', () => {
  let service: ReviewItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
