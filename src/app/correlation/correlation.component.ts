import { Component } from '@angular/core';
import { DataTest1Service } from '../services/data-test1.service';
import { DataTest2Service } from '../services/data-test2.service';
import { DataTest3Service } from '../services/data-test3.service';
import { DataTest4Service } from '../services/data-test4.service';
import { sum, sumXY, sumPow } from '../common/calculate';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {

  constructor(
    private test1: DataTest1Service,
    private test2: DataTest2Service,
    private test3: DataTest3Service,
    private test4: DataTest4Service
  )
  {}

  arreglo: any

  // getData1(a: string): number[]{
  //   if(a == "x"){
  //     this.arreglo = [
  //       130, 650, 99, 150, 128, 302, 95, 945, 368, 961
  //     ] 
  //   }
  //   else{
  //     this.arreglo = [
  //       186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
  //     ]
  //   }
  //   return this.arreglo
  // }

  // getData2(a: string): number[]{
  //   if(a == "x"){
  //     this.arreglo = [
  //       130, 650, 99, 150, 128, 302, 95, 945, 368, 961
  //     ] 
  //   }
  //   else{
  //     this.arreglo = [
  //       15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2
  //     ]
  //   }
  //   return this.arreglo
  // }

  // getData3(a: string): number[]{
  //   if(a == "x"){
  //     this.arreglo = [
  //       163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130
  //     ] 
  //   }
  //   else{
  //     this.arreglo = [
  //       186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
  //     ]
  //   }
  //   return this.arreglo
  // }

  // getData4(a: string): number[]{
  //   if(a == "x"){
  //     this.arreglo = [
  //       163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130
  //     ] 
  //   }
  //   else{
  //     this.arreglo = [
  //       15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2
  //     ]
  //   }
  //   return this.arreglo
  // }

  getData1(a: string): number[]{
    this.arreglo = []
    this.test1.getHeader()
    .subscribe((data: any) => {
      console.log(data);
      if(a == "x"){
        this.arreglo = data.proxy_size;
      }
      else{
        this.arreglo = data.actual_added
      }
    });
    return this.arreglo
  }

  getData2(a: string): number[]{
    this.arreglo = []
    this.test2.getHeader()
    .subscribe((data: any) => {
      console.log(data);
      if(a == "x"){
        this.arreglo = data.proxy_size;
      }
      else{
        this.arreglo = data.actual_develop
      }
    });
    return this.arreglo
  }

  getData3(a: string): number[]{
    this.arreglo = []
    this.test3.getHeader()
    .subscribe((data: any) => {
      console.log(data);
      if(a == "x"){
        this.arreglo = data.plan_added;
      }
      else{
        this.arreglo = data.actual_added
      }
    });
    return this.arreglo
  }

  getData4(a: string): number[]{
    this.arreglo = []
    this.test4.getHeader()
    .subscribe((data: any) => {
      console.log(data);
      if(a == "x"){
        this.arreglo = data.plan_added;
      }
      else{
        this.arreglo = data.actual_develop
      }
    });
    return this.arreglo
  }

  correlation(x: number[], y: number[]): number{
    const n: number = x.length
    const numerator: number = this.numerator(x, y, n)
    const denominator: number = this.denominator(x, y, n)
    const r: number = numerator/denominator
    return r
  }

  numerator(x: number[], y: number[], n: number): number{
    const num1: number = n*sumXY(x,y)
    const num2: number = sum(x)*sum(y)
    const numerator: number = num1-num2
    return numerator
  }

  denominator(x: number[], y: number[], n: number): number{
    const denom1: number = (n*sumPow(x))-Math.pow(sum(x),2)
    const denom2: number = (n*sumPow(y))-Math.pow(sum(y),2)
    const denominator: number = Math.sqrt(denom1*denom2)
    return denominator
  }
}
