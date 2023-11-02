export function Width(x0: number, x1: number, seg: number): number{
    const width: number = (x1-x0)/seg
    return width
}

export function F2x(x0: number, x1: number, width: number, seg: number): number[]{
    let fx: any = []
    let cont: number = 0
    for(let i=x0; i<x1; i+width){
        if(i!=x0){
            if(cont%2 == 0){
                fx[cont] = (i*2)*2
            }
            else{
                fx[cont] = (i*2)*4
            }
        }
        else{
            fx[cont] = x0*2
        }
        cont = cont++
    }
    fx[cont] = x1*2
    return fx
}

export function Fx2(x0: number, x1: number, width: number, seg: number): number[]{
    let fx: any = []
    let cont: number = 0
    for(let i=x0; i<x1; i+width){
        if(i!=x0){
            if(cont%2 == 0){
                fx[cont] = (i^2)*2
            }
            else{
                fx[cont] = (i^2)*4
            }
        }
        else{
            fx[cont] = x0^2
        }
        cont = cont++
    }
    fx[cont] = x1^2
    return fx
}

export function F1_x(x0: number, x1: number, width: number, seg: number): number[]{
    let fx: any = []
    let cont: number = 0
    for(let i=x0; i<x1; i+width){
        if(i!=x0){
            if(cont%2 == 0){
                fx[cont] = (1/i)*2
            }
            else{
                fx[cont] = (1/i^2)*4
            }
        }
        else{
            fx[cont] = 1/x0
        }
        cont = cont++
    }
    fx[cont] = 1/x1
    return fx
}

export function Simpson(w_3: number, fx: number[]): number{
    let simpson: number = 0
    for(let i=0; i<fx.length;){
        simpson = simpson + (w_3*fx[i])
    }
    return simpson
}