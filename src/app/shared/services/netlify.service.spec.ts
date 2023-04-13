import { TestBed } from '@angular/core/testing';

import { NetlifyService } from './netlify.service';

describe('NetlifyService', () => {
  let service: NetlifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetlifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
