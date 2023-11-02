export function sum(x: number[]): number{
    let sum: number = 0
    for (const value of x){
        sum = sum + value
    }
    return sum
}

export function sumXY(x: number[], y: number[]): number{
    const n: number = x.length
    let sum: number = 0;
    for (let i=0; i<n; i++){
        sum = sum + (x[i] * y[i])
    }
    return sum
}

export function sumPow(x: number[]): number{
    let sum: number = 0;
    for (const value of x){
        sum = sum + Math.pow(value, 2);
    }
    return sum
}