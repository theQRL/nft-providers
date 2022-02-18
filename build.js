const YAML = require("yamljs");
const fs = require("fs");

var filePath = "./index.js";;
fs.unlinkSync(filePath);

let content = '/* AUTO GENERATED FILE DO NOT EDIT OR MAKE PRs FOR THIS FILE */\n\n';

// Load YAML file using YAML.load
nativeObject = YAML.load("providers.yml");

// definition
content += "const qrlNft = {";

// version from package.json
content += `"version":"${process.env.npm_package_version}", `;

// stringify YAML->JSON object
const json = JSON.stringify(nativeObject)
// chop out opening as we have already added version key
content += json.slice(1, json.length);
content += ';\n\n';

// export the object
content += 'module.exports = qrlNft;\n';

// try and write the file
try {
  fs.writeFileSync(filePath, content);
  //file written successfully
} catch (err) {
  console.error(err);
}
