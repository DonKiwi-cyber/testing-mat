import { TestBed } from '@angular/core/testing';
import { DataTest2Service } from './data-test2.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataTest2Service', () => {
  let service: DataTest2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataTest2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
