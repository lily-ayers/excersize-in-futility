import { TestBed } from '@angular/core/testing';

import { MultiplyAnguishService } from './multiply-anguish.service';

describe('MultiplyAnguishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplyAnguishService = TestBed.get(MultiplyAnguishService);
    expect(service).toBeTruthy();
  });
});
