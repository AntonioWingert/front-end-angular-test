import { TestBed } from '@angular/core/testing';

import { NameBlockFormService } from './api-cards.service';

describe('NameBlockFormService', () => {
  let service: NameBlockFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameBlockFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
