import { TestBed } from '@angular/core/testing';

import { ImgHighlightService } from './img-highlight.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImgHighlightService', () => {
  let service: ImgHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImgHighlightService],
    });
    service = TestBed.inject(ImgHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
