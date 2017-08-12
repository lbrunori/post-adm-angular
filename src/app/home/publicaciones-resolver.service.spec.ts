import { TestBed, inject } from '@angular/core/testing';

import { PublicacionesResolverService } from './publicaciones-resolver.service';

describe('PublicacionesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionesResolverService]
    });
  });

  it('should be created', inject([PublicacionesResolverService], (service: PublicacionesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
