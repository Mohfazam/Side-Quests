// AsciiyoUint8array

function asciiToBytes(x){
    return new Uint8Array([...x].map(i => i.charCodeAt(i)));
}

let x = "HELLO";
let bytes = asciiToBytes(x);
console.log(bytes);

