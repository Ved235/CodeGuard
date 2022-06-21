var fs = require("fs");

var jsObfuscator = require("javascript-obfuscator");

fs.readFile("./code.js", "UTF-8", function (error, code) {
  if (error) {
    throw error;
  }

  var obfuscatorResult = jsObfuscator.obfuscate(code);

  fs.writeFile(
    "./obfuscatedCode.js",
    obfuscatedResult.getObfuscatedCode(),
    function (fsError) {
      if (fsError) {
        return console.log(fsError);
      }

      console.log("Obfuscated code written to file");
    }
  );
});
