const allThePackageNames = require("all-the-package-names")
const exec = require('util').promisify(require('child_process').execFile)
let i = 0;
(async()=>{
for(let pkg of allThePackageNames) {
  console.log("installing package",++i,"of",allThePackageNames.length)
  try{await exec("pnpm", ['install','--', pkg])}catch(e){console.warn("failed to install package",i,"of",allThePackageNames.length);}
}
})()
