const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "a.txt");
let filePath2 = path.join(__dirname, "b.txt");

let text1 = fs.readFileSync(filePath1, "utf-8");
let text2 = fs.readFileSync(filePath2, "utf-8");

console.log(text1 + "\n" + text2);