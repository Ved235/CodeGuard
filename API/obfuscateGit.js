const args = process.argv.slice(2);

filepath = args[0];
wheretosave = args[1];


var fs = require("fs");

var jsObfuscator = require('javascript-obfuscator');

fs.readFile(filepath, 'UTF-8', function(error, code){
    if (error)
    {
        throw error;
    }

    var obfuscateResult = jsObfuscator.obfuscate(code)
    fs.writeFile(wheretosave, obfuscateResult.getObfuscatedCode(), function(fsError){
        if (fsError)
        {
            console.log(fsError);
        }

        console.log('Obfuscated code saved to file');
    });
});
