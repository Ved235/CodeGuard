var fs = require("fs");

var jsObfuscator = require('javascript-obfuscator');

fs.readFile('./uploads/code.js', 'UTF-8', function(error, code){
    if (error)
    {
        throw error;
    }

    var obfuscateResult = jsObfuscator.obfuscate(code)
    fs.writeFile('./uploads/obfuscatedCode.js', obfuscateResult.getObfuscatedCode(), function(fsError){
        if (fsError)
        {
            console.log(fsError);
        }

        console.log('Obfuscated code saved to file');
    });
});
