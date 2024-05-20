import { TestBed } from '@angular/core/testing';

import { NeighboorHoodService } from './neighboor-hood.service';

describe('NeighboorHoodService', () => {
  let service: NeighboorHoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighboorHoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
