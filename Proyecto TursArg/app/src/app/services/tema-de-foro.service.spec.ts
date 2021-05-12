import { TestBed } from '@angular/core/testing';

import { TemaDeForoService } from './tema-de-foro.service';

describe('TemaDeForoService', () => {
  let service: TemaDeForoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemaDeForoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
