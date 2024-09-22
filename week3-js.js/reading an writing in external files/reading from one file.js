const fs = require("fs");
const path = require("path");

let filepath = path.join(__dirname, "a.txt");

let text = fs.readFileSync(filepath, "utf-8");

console.log(text);