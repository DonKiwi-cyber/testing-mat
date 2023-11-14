import {F2x, Fx2, F1_x} from "./simpson_rule"
import {FTs} from "./tstudent_rule"

export function Width(x0: number, x1: number, seg: number): number{
    const width: number = (x1-x0)/seg
    return width
}

function FX(value: number, func: number, dof: number): number{
    let fx: number = 0
    switch(func){
        case 1:
            fx = F2x(value)
            break
        case 2:
            fx = Fx2(value)
            break
        case 3:
            fx = F1_x(value)
            break
        case 4:
            fx = FTs(value, dof)
            break
        default:
            console.log("introduzca un número de función válido")
    }
    return fx
}

function P(w_3: number, fx: number[]): number{
    let simpson: number = 0
    for(const element of fx){
        simpson = simpson + (w_3*element)
    }
    return simpson
}

export function error(p: number, p2: number, err: number): boolean{
    const x: number = p-p2
    if(x<err){
      return true
    }
    else{
      return false
    }
}

export function Simpson(x0: number, x1: number, width: number, func: number, w_3: number, dof: number): number{
    let fx: Array<number> = []
    let p: number = 0
    let cont: number = 0
    let acum: number = x0
    while(acum < x1){
        if (acum == x0){
            fx[cont] = FX(acum, func, dof)
        }
        else if(cont%2 == 0){
                fx[cont] = (FX(acum, func, dof))*2
            }
            else{
                fx[cont] = (FX(acum, func, dof))*4
            }
        acum = acum + width
        cont ++
    }
    fx[cont] = FX(acum, func, dof)
    return p = P(w_3, fx)
}