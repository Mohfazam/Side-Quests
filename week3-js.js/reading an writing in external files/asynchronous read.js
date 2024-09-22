let fs = require("fs");
let path = require("path");

function print(err, data){
    if(err){
        console.log("File not found");
    }
    else{
        console.log(data);
    }
}

let filepath = path.join(__dirname, "a.txt");

fs.readFile(filepath, "utf-8", print);

console.log("done!");
