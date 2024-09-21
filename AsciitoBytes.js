//ASCII to BYTES

function value(x){
  let bytes = [];
  for(let i = 0; i < x.length; i++){
    bytes.push(x.charCodeAt(i));
  }
  return bytes;
}




let x = "HELLO";
console.log(value(x));