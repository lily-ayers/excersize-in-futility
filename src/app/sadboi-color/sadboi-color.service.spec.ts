import { TestBed } from '@angular/core/testing';

import { SadboiColorService } from './sadboi-color.service';

describe('SadboiColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SadboiColorService = TestBed.get(SadboiColorService);
    expect(service).toBeTruthy();
  });
});
