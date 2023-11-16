import { Component } from '@angular/core';
import {Width, error, Simpson} from '../common/functions';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  simpson(x0: number, x1: number, seg: number, func: number): number{
    if (x1 < x0){
      let a: number = x0
      x0 = x1
      x1 = a
    }
    const width: number = Width(x0, x1, seg)
    const w_3: number = width/3
    let p: number = Simpson(x0, x1, width, func, w_3, 0)
    switch(func){
      case 1:
        p = Math.round(p)
        break
      case 2:
        p = parseFloat(p.toFixed(4))
        break
      case 3:
        p = parseFloat(p.toFixed(2))
        break
    }
    return p
  }

  error(p: number, p2: number, err: number): boolean{
    return error(p, p2, err)
  }
}
