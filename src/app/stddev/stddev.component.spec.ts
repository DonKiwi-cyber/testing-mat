import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { A1DevHoursService } from '../services/a1-dev-hours.service';
import { A1ProxySizeService } from '../services/a1-proxy-size.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { StddevComponent } from './stddev.component';
import { MediaComponent } from '../media/media.component';

describe('StddevComponent', () => {
  let Stddevcomponent: StddevComponent;
  let Mediacomponent: MediaComponent;
  let Stddevfixture: ComponentFixture<StddevComponent>;
  let Mediafixture: ComponentFixture<MediaComponent>;
  let servicio1: A1ProxySizeService;
  let servicio2: A1DevHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent, MediaComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [A1DevHoursService, A1ProxySizeService],
      teardown: { destroyAfterEach: false }
    });
    Stddevfixture = TestBed.createComponent(StddevComponent);
    Mediafixture = TestBed.createComponent(MediaComponent);
    Stddevcomponent = Stddevfixture.componentInstance;
    Mediacomponent = Mediafixture.componentInstance;
    servicio1=TestBed.inject(A1ProxySizeService);
    servicio2=TestBed.inject(A1DevHoursService);
    Stddevfixture.detectChanges();
  });

  it('should create', () => {
    expect(Stddevcomponent).toBeTruthy();
  });

  it('Should return "stddev = 572.03" with the data', ()=> {
    const awaiting = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(servicio1, 'getHeader').and.returnValues(of(awaiting));
    const data: number[] = Stddevcomponent.getData1();
    const media: number = Mediacomponent.media(data);
    const standar: number = Stddevcomponent.stddev(data, media);
    expect(standar).toBe(572.03);
  })

  it('Should return "stddev = 62.26" with the data', ()=> {
    const awaiting = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(servicio2, 'getHeader').and.returnValues(of(awaiting));
    const data: number[] = Stddevcomponent.getData2();
    const media: number = Mediacomponent.media(data);
    const standar: number = Stddevcomponent.stddev(data, media);
    expect(standar).toBe(62.26);
  })
});
