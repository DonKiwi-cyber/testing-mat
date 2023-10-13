import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { A1DevHoursService } from './a1-dev-hours.service';

describe('A1DevHoursService', () => {
  let service: A1DevHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(A1DevHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
