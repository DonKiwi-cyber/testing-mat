import { Component } from '@angular/core';
import { A1ProxySizeService } from '../services/a1-proxy-size.service';
import { A1DevHoursService } from '../services/a1-dev-hours.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  constructor(private a1Proxy: A1ProxySizeService,
    private a1Dev: A1DevHoursService){
  }

  arreglo1: any = [];
  arreglo2: any = [];

  getData1(): number[]{
    this.a1Proxy.getHeader()
    .subscribe((data: any) => {
        console.log(data);
        this.arreglo1 = data;
    });
    return this.arreglo1;
  }

  getData2(): number[]{
    this.a1Dev.getHeader()
    .subscribe((data: any) => {
        console.log(data);
        this.arreglo2 = data;
    });
    return this.arreglo2;
  }

  stddev(x: number[], media: number): number{
    let stddev: number = 0;
    let suma: number = 0;
    let denominador: number = x.length - 1;
    for(const val of x){
      let pow = Math.pow(val - media, 2);
      suma = suma + pow;
    }
    stddev = Math.sqrt(suma/denominador)
    return Number(stddev.toFixed(2));
  }
}
