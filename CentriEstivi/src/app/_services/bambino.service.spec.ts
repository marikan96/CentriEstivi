import { TestBed, inject } from '@angular/core/testing';

import { BambinoService } from './bambino.service';

describe('BambinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BambinoService]
    });
  });

  it('should be created', inject([BambinoService], (service: BambinoService) => {
    expect(service).toBeTruthy();
  }));
});
