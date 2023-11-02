import { TestBed } from '@angular/core/testing';
import { DataTest4Service } from './data-test4.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataTest4Service', () => {
  let service: DataTest4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataTest4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
