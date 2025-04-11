import { TestBed } from '@angular/core/testing';

import { IncomeSourceService } from './income-source.service';

describe('IncomeSourceService', () => {
  let service: IncomeSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
