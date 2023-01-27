const package = {
  name: "generated",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  author: "",
  license: "UNLICENSED",
};
package.dependencies = Object.fromEntries(
  require("all-the-package-names").map((e) => [e, "*"])
);
const fs = require("fs");
if (!fs.existsSync("generated")) {
  fs.mkdirSync("generated");
}
fs.writeFileSync("generated/package.json", JSON.stringify(package));
