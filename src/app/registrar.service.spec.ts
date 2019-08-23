import { TestBed } from '@angular/core/testing';

import { RegistrarService } from './registrar.service';

describe('RegistrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarService = TestBed.get(RegistrarService);
    expect(service).toBeTruthy();
  });
});
