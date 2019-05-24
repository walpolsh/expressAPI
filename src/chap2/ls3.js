const fs = require("fs").promises;

(async () => {
  let dir = ".";
  if (process.argv[2]) dir = process.argv[2]; //if a command line arguement is present, override the 'dir' value. Ex: '..' will display the directory above CWD.
  const files = await fs.readdir(dir);
  for (let fn of files) {
    console.log(fn);
  }
})().catch(err => {
  console.error(err);
});
console.log("first");
