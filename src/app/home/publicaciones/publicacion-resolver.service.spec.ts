import { TestBed, inject } from '@angular/core/testing';

import { PublicacionResolverService } from './publicacion-resolver.service';

describe('PublicacionResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionResolverService]
    });
  });

  it('should be created', inject([PublicacionResolverService], (service: PublicacionResolverService) => {
    expect(service).toBeTruthy();
  }));
});
