const allThePackageNames = require("all-the-package-names")
const exec = require('util').promisify(require('child_process').execFile)
let i = 0;
(async()=>{
for(let pkg of allThePackageNames) {
  console.log("installing package",++i,"of",allThePackageNames.length)
  await exec("pnpm", ['install',pkg])
}
})()
