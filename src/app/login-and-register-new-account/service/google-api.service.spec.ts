import { TestBed } from '@angular/core/testing';

import { GoogleApiService } from './google-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

class MockGoogleApiService {}
class MockOAuthLogger {}
class MockUrlHelperService {}
class MockOAuthService {}

describe('GoogleApiService', () => {
  let service: GoogleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      // providers: [GoogleApiService, OAuthService, UrlHelperService],
      providers: [
        // GoogleApiService,
        // OAuthService,
        // UrlHelperService,
        { provide: UrlHelperService, useValue: MockUrlHelperService },
        { provide: GoogleApiService, useValue: MockGoogleApiService },
        { provide: OAuthLogger, useValue: MockOAuthLogger },
        { provide: OAuthService, useValue: MockOAuthService }
      ],
    });
    service = TestBed.inject(GoogleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
