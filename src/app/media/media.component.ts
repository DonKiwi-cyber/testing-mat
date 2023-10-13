import { Component, OnInit } from '@angular/core';
import { A1ProxySizeService } from '../services/a1-proxy-size.service';
import { A1DevHoursService } from '../services/a1-dev-hours.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent{

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

  media(x: number[]): number{
    let media: number = 0;
    let suma: number = 0;
    for(var val of x){
      suma = suma + val;
    }
    media = suma/x.length;
    console.log(media);
    return Number(media.toFixed(2));
  }
}
