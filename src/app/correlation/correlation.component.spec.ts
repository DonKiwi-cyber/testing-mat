import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { DataTest1Service } from '../services/data-test1.service';
import { DataTest2Service } from '../services/data-test2.service';
import { DataTest3Service } from '../services/data-test3.service';
import { DataTest4Service } from '../services/data-test4.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let serviceTest1: DataTest1Service;
  let serviceTest2: DataTest2Service;
  let serviceTest3: DataTest3Service;
  let serviceTest4: DataTest4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataTest1Service, DataTest2Service, DataTest3Service, DataTest4Service],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    serviceTest1 = TestBed.inject(DataTest1Service);
    serviceTest2 = TestBed.inject(DataTest2Service);
    serviceTest3 = TestBed.inject(DataTest3Service);
    serviceTest4 = TestBed.inject(DataTest4Service);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Data_Test1
  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    const awaiting = {
      "proxy_size": [
        130, 650, 99, 150, 128, 302, 95, 945, 368, 961
      ],
      "actual_added": [
        186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
      ]
    }
    spyOn(serviceTest1, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData1("x")
    const datay: number[] = component.getData1("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    expect(r).toBe(0.9545)
  })
  
  it('Should return rr=0.9111 with the dataset Data_Test1', () => {
    const awaiting = {
      "proxy_size": [
        130, 650, 99, 150, 128, 302, 95, 945, 368, 961
      ],
      "actual_added": [
        186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
      ]
    }
    spyOn(serviceTest1, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData1("x")
    const datay: number[] = component.getData1("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    const rr: number = parseFloat((r*r).toFixed(4))
    expect(rr).toBe(0.9111)
  })

  //Data_Test2
  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    const awaiting = {
      "proxy_size": [
        130, 650, 99, 150, 128, 302, 95, 945, 368, 961
      ],
      "actual_develop": [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2
      ]
    }
    spyOn(serviceTest2, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData2("x")
    const datay: number[] = component.getData2("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    expect(r).toBe(0.9333)
  })

  it('Should return rr=0.8711 with the dataset Data_Test2', () => {
    const awaiting = {
      "proxy_size": [
        130, 650, 99, 150, 128, 302, 95, 945, 368, 961
      ],
      "actual_develop": [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2
      ]
    }
    spyOn(serviceTest2, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData2("x")
    const datay: number[] = component.getData2("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    const rr: number = parseFloat((r*r).toFixed(4))
    expect(rr).toBeCloseTo(0.8711)
  })

  //Data_Test3
  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    const awaiting = {
      "plan_added": [
        163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130
      ],
      "actual_added": [
        186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
      ]
    }
    spyOn(serviceTest3, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData3("x")
    const datay: number[] = component.getData3("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    expect(r).toBe(0.9631)
  })

  it('Should return rr=0.9276. with the dataset Data_Test3', () => {
    const awaiting = {
      "plan_added": [
        163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130
      ],
      "actual_added": [
        186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
      ]
    }
    spyOn(serviceTest3, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData3("x")
    const datay: number[] = component.getData3("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    const rr: number = parseFloat((r*r).toFixed(4))
    expect(rr).toBe(0.9276)
  })

  //Data_Test4
  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    const awaiting = {
      "plan_added": [
        163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130
      ],
      "actual_develop": [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2
      ]
    }
    spyOn(serviceTest4, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData4("x")
    const datay: number[] = component.getData4("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    expect(r).toBe(0.9480)
  })

  it('Should return rr=0.8988 with the dataset Data_Test4', () => {
    const awaiting = {
      "plan_added": [
        163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130
      ],
      "actual_develop": [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2
      ]
    }
    spyOn(serviceTest4, 'getHeader').and.returnValues(of(awaiting))
    const datax: number[] = component.getData4("x")
    const datay: number[] = component.getData4("y")
    const r: number = parseFloat(component.correlation(datax, datay).toFixed(4))
    const rr: number = parseFloat((r*r).toFixed(4))
    expect(rr).toBeCloseTo(0.8988)
  })
});
