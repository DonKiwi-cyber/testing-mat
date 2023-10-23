import { Component } from '@angular/core';
import { DataTest1Service } from '../services/data-test1.service';
import { DataTest2Service } from '../services/data-test2.service';
import { DataTest3Service } from '../services/data-test3.service';
import { DataTest4Service } from '../services/data-test4.service';
import { sum, sumXY, sumPow } from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {

  constructor(
    private test1: DataTest1Service,
    private test2: DataTest2Service,
    private test3: DataTest3Service,
    private test4: DataTest4Service
  )
  {}

  proxy_size(): number[]{
    let x: number[] = [
      130,
      650,
      99,
      150,
      128,
      302,
      95,
      945,
      368,
      691
    ]
    return x;
  }

  plan_added(): number[]{
    let x: number[] = [
      163,
      765,
      141,
      166,
      137,
      355,
      136,
      1206,
      433,
      1130
    ]
    return x;
  }

  actual_added(): number[]{
    let y: number[] = [
      186,
      699,
      132,
      272,
      291,
      331,
      199,
      1890,
      788,
      1601
    ]
    return y;
  }

  actual_develop(): number[]{
    let y: number[] = [
      15,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2
    ]
    return y
  }

  getX(x: number): number[]{
    let arregloX: any = [];
    switch(x){
      case 1:
        this.test1.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloX = data.proxy_size;
        });
        break;
      case 2:
        this.test2.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloX = data.proxy_size;
        });
        break;
      case 3:
        this.test3.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloX = data.plan_added;
        });
        break;
      case 4:
        this.test4.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloX = data.plan_added;
        });
        break;
      default:
        console.log('Not a valid value');
        arregloX = [];
        break;
    }
    return arregloX;
  }


  getY(y: number): number[]{
    let arregloY: any = [];
    switch(y){
      case 1:
        this.test1.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloY = data.actual_added;
        });
        break;
      case 2:
        this.test2.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloY = data.actual_develop;
        });
        break;
      case 3:
        this.test3.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloY = data.actual_added;
        });
        break;
      case 4:
        this.test4.getHeader()
        .subscribe((data: any) => {
          console.log(data);
          arregloY = data.actual_develop;
        });
        break;
      default:
        console.log('Not a valid value');
        arregloY = [];
        break;
    }
    return arregloY;
  }

  B1(x: number[], y: number[]): number{
    const sigmaX: number = sum(x);
    const sigmaY: number = sum(y);
    const sigmaXY: number = sumXY(x,y);
    const n: number = x.length;
    const Xavg: number = sigmaX/n;
    const Yavg: number = sigmaY/n;
    const powX: number = sumPow(x);
    const powXavg: number = Math.pow(Xavg, 2);

    const nominator: number = sigmaXY - (n*Xavg*Yavg);
    const denominator: number = powX - n*powXavg;

    const B1: number = nominator/denominator;
    return B1;
  }

  B0(x: number[], y: number[], B1: number): number{
    const sigmaX: number = sum(x);
    const sigmaY: number = sum(y);
    const n: number = x.length;
    const Xavg: number = sigmaX/n;
    const Yavg: number = sigmaY/n;

    const B0: number = Yavg - B1*Xavg;
    return B0;
  }

  Yk(B0: number, B1: number, Xk: number): number{
    const Yk: number = B0 + B1*Xk;
    return Yk;
  }
}
