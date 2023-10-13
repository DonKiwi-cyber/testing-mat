import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClientModule } from '@angular/common/http';
import { A1DevHoursService } from '../services/a1-dev-hours.service';
import { A1ProxySizeService } from '../services/a1-proxy-size.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let servicio11: A1ProxySizeService;
  let servicio2: A1DevHoursService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [A1DevHoursService, A1ProxySizeService],
      teardown: { destroyAfterEach: false }
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    servicio11=TestBed.inject(A1ProxySizeService);
    servicio2=TestBed.inject(A1DevHoursService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return "mean = 550.6" with the data', ()=> {
    const awaiting = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(servicio11, 'getHeader').and.returnValues(of(awaiting));
    const data: number[] = component.getData1();
    const mean: number = component.media(data);
    expect(mean).toBe(550.6);
  })

  it('Should return "mean = 60.32" with the data', ()=> {
    const awaiting = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(servicio2, 'getHeader').and.returnValues(of(awaiting));
    const data = component.getData2();
    const mean = component.media(data);
    expect(mean).toBe(60.32);
  })

});
