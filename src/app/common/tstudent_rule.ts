export function FTs(value: number, dof: number): number{
    const result: number = T_student(value, dof)
    return result
}

function T_student(x: number, dof: number): number{
    const numerator: number = Gamma((dof+1)/2)
    const denom1: number = Math.pow(dof * Math.PI, 0.5)
    const denom2: number = Gamma(dof/2)
    const denominator: number = denom1 * denom2
    const mult: number = 1+(Math.pow(x,2)/dof)
    const pow: number = -(dof+1)/2
    const multiplier: number = Math.pow(mult, pow)
    const t_student: number = (numerator/denominator)*multiplier
    return t_student
}

function Gamma(value: number): number{
    let gamma: number
    if(value%1 == 0){
        if(value == 1){
            gamma = 1
        }
        else if(value == 5){
            gamma = factorial(4)
        }
        else{
            gamma = factorial(value-1)
        }
    }
    else if(value == 0.5){
        gamma = Math.sqrt(Math.PI)
    }else{
        gamma = (value-1)*Gamma(value-1)
    }
    return gamma
}

function factorial(n: number): number {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}