import { TestBed } from '@angular/core/testing';

import { A5SimpsonService } from './a5-simpson.service';

describe('A5SimpsonService', () => {
  let service: A5SimpsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A5SimpsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
