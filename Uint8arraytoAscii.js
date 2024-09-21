// Uint8arraytoAscii

function call(x){
    return new TextDecoder().decode(x);
}

let x = new Uint8Array([72, 69, 76, 76, 79]);
console.log(call(x));