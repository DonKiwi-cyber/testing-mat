import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataTest1Service } from './data-test1.service';

describe('DataTest1Service', () => {
  let service: DataTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataTest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
