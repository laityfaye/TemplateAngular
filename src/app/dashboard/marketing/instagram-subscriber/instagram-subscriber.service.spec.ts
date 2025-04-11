import { TestBed } from '@angular/core/testing';

import { InstagramSubscriberService } from './instagram-subscriber.service';

describe('InstagramSubscriberService', () => {
  let service: InstagramSubscriberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramSubscriberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
