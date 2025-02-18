import { TestBed } from '@angular/core/testing';

import { MyHttpService } from './my-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyHttpService', () => {
  let service: MyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MyHttpService],
    });
    service = TestBed.inject(MyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
