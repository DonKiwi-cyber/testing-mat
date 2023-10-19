import { TestBed } from '@angular/core/testing';
import { DataTest3Service } from './data-test3.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataTest3Service', () => {
  let service: DataTest3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataTest3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
