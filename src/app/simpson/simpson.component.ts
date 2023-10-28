import { Component } from '@angular/core';
import {Width, F2x, Fx2, F1_x, Simpson} from '../common/simpson_rule'

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  constructor(){

  }

  simpson(x0: number, x1: number, seg: number, f: number): number{
    const width: number = Width(x0, x1, seg)
    const w_3: number = width/3
    let fx: any = []
    let simpson: number
    switch(f){
      case 1: 
        fx = F2x(x0, x1, width, seg)
        break
      case 2:
        fx = Fx2(x0, x1, width, seg)
        break
      case 3:
        fx = F1_x(x0, x1, width, seg)
        break
      default:
        console.log("escriba un valor de elección válido")
    }
    simpson = Simpson(w_3, fx)
    return simpson
  }

  error(p: number, p2: number): boolean{
    const x: number = p-p2
    let err: boolean
    if(x<0.0001){
      err = true
    }
    else{
      err = false
    }
    return err
  }
}
