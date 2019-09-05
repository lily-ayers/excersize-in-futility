import { TestBed } from '@angular/core/testing';

import { SadboiAdvanceService } from './sadboi-advance.service';

describe('SadboiAdvanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SadboiAdvanceService = TestBed.get(SadboiAdvanceService);
    expect(service).toBeTruthy();
  });
});
