import { TestBed } from '@angular/core/testing';

import { WastelandGeneratorService } from './wasteland-generator.service';

describe('WastelandGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WastelandGeneratorService = TestBed.get(WastelandGeneratorService);
    expect(service).toBeTruthy();
  });
});
