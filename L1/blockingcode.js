const fs = require("fs");

const data = fs.readFileSync("README.md", "utf-8"); // blocking code

console.log(data);
console.log("Done!");
