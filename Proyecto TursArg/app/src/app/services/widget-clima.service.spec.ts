import { TestBed } from '@angular/core/testing';

import { WidgetClimaService } from './widget-clima.service';

describe('WidgetClimaService', () => {
  let service: WidgetClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
