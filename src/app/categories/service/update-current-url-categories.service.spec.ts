import { TestBed } from '@angular/core/testing';

import { UpdateCurrentUrlCategoriesService } from './update-current-url-categories.service';

describe('UpdateCurrentUrlCategoriesService', () => {
  let service: UpdateCurrentUrlCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCurrentUrlCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
