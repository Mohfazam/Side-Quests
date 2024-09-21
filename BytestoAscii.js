//Bytes to Ascii Values


function call(x){
    return x.map(byte => String.fromCharCode(byte)).join("");
}

let x = [72, 69, 76, 76, 79 ];
console.log(call(x));