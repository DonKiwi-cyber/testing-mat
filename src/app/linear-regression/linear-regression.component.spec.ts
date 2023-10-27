import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataTest1Service } from '../services/data-test1.service';
import { DataTest2Service } from '../services/data-test2.service';
import { DataTest3Service } from '../services/data-test3.service';
import { DataTest4Service } from '../services/data-test4.service';
import { of } from 'rxjs';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let serviceTest1: DataTest1Service;
  let serviceTest2: DataTest2Service;
  let serviceTest3: DataTest3Service;
  let serviceTest4: DataTest4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataTest1Service, DataTest2Service, DataTest3Service, DataTest4Service],
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
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
  it('Should return B1 = 1.7279 with the dataset A1_Test1', () => {
    
    const dataX: number[] = component.proxy_size();
    const dataY: number[] = component.actual_added();
    const B1: number = component.B1(dataX, dataY);
    console.log(B1);
    expect(B1).toBe(1.7279);
  })

  it('Should return B0 = -22.55 with the dataset Data_Test1', () => {
    const dataX: number[] = component.proxy_size();
    const dataY: number[] = component.actual_added();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    console.log(B0);
    expect(B0).toBe(-22.55);
  })

  it('Should return yk = 644.429 with the dataset Data_Test1 if x=386', () => {
    
    const xk: number = 386;
    const dataX: number[] = component.proxy_size();
    const dataY: number[] = component.actual_added();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    const yk: number = component.Yk(B0, B1, xk);
    console.log(yk);
    expect(yk).toBe(644.429); 
  })

  //Data2
  it('Should return B1 = 0.1681 with the dataset Data_Test2', () => {
    
    const dataX: number[] = component.proxy_size();
    const dataY: number[] = component.actual_develop();
    const B1: number = component.B1(dataX, dataY);
    console.log(B1);
    expect(B1).toBe(0.1681);
  })

  it('Should return B0 = -4.039 with the dataset Data_Test2', () => {
    
    const dataX: number[] = component.proxy_size();
    const dataY: number[] = component.actual_develop();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    console.log(B0);
    expect(B0).toBe(-4.039);
  })

  it('Should return yk = 60.858 with the dataset Data_Test2 if x=386', () => {
    
    const xk: number = 386;
    const dataX: number[] = component.proxy_size();
    const dataY: number[] = component.actual_develop();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    const yk: number = component.Yk(B0, B1, xk);
    console.log(yk);
    expect(yk).toBe(60.858); 
  })

  //Data3
  it('Should return B1 = 1.43097 with the dataset Data_Test3', () => {
    
    const dataX: number[] = component.plan_added();
    const dataY: number[] = component.actual_added();
    const B1: number = component.B1(dataX, dataY);
    console.log(B1);
    expect(B1).toBe(1.43097);
  })

  it('Should return B0 = -23.92 with the dataset Data_Test3', () => {
    
    const dataX: number[] = component.plan_added();
    const dataY: number[] = component.actual_added();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    console.log(B0);
    expect(B0).toBe(-23.92);
  })

  it('Should return yk = 528.4294 with the dataset Data_Test3 if x=386', () => {
    
    const xk: number = 386;
    const dataX: number[] = component.plan_added();
    const dataY: number[] = component.actual_added();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    const yk: number = component.Yk(B0, B1, xk);
    console.log(yk);
    expect(yk).toBe(528.4294); 
  })

  //Data4
  it('Should return B1 = 0.16064 with the dataset Data_Test4', () => {
    
    const dataX: number[] = component.plan_added();
    const dataY: number[] = component.actual_develop();
    const B1: number = component.B1(dataX, dataY);
    console.log(B1);
    expect(B1).toBe(0.16064);
  })

  it('Should return B0 = -4.604 with the dataset Data_Test4', () => {
    
    const dataX: number[] = component.plan_added();
    const dataY: number[] = component.actual_develop();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    console.log(B0);
    expect(B0).toBe(-4.604);
  })

  it('Should return yk = 49.4994 with the dataset Data_Test4 if x=386', () => {
    
    const xk: number = 386;
    const dataX: number[] = component.plan_added();
    const dataY: number[] = component.actual_develop();
    const B1: number = component.B1(dataX, dataY);
    const B0: number = component.B0(dataX, dataY, B1);
    const yk: number = component.Yk(B0, B1, xk);
    console.log(yk);
    expect(yk).toBe(49.4994); 
  })
});
