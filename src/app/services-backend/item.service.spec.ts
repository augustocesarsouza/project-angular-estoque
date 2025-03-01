import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService],
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
