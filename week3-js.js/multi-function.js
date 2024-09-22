function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operation(a,b, fun){
    let val = fun(a,b);
    return val;
}

let x = operation(2, 3, multiply);

console.log(x);