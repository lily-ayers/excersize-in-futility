import { TestBed } from '@angular/core/testing';

import { IdleSuffererBrainService } from './idle-sufferer-brain.service';

describe('IdleSuffererBrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdleSuffererBrainService = TestBed.get(IdleSuffererBrainService);
    expect(service).toBeTruthy();
  });
});
