const fs = require("fs");
const res = JSON.parse(fs.readFileSync("./data.json", "utf8"));

console.log(res.hello);
console.log(res.number);
