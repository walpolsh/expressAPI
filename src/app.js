const http = require("http");
const s = require("./simple");
import * as simple from "./simple2.mjs/index.js";
const port = 8124;
console.log(s.count);
console.log(squared(5));
s.next;
console.log(simple.count);
console.log(s.count);
console.log(s.count);
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hey dude its on " + port + "\n");
  })
  .listen(port, "127.0.0.1");

console.log("hey dude its on " + port);
