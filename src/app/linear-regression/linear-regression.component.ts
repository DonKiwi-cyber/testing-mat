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
