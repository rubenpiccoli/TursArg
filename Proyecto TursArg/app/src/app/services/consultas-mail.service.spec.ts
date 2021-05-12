import { TestBed } from '@angular/core/testing';

import { ConsultasMailService } from './consultas-mail.service';

describe('ConsultasMailService', () => {
  let service: ConsultasMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
