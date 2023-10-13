import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { A1ProxySizeService } from './a1-proxy-size.service';

describe('A1ProxySizeService', () => {
  let service: A1ProxySizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(A1ProxySizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
