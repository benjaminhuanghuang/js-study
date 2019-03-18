var fs = require("fs");
fs.readFile(__dirname+"/test.txt", "utf8", function(err, content){
    if (error){
        console.error(error);
        return;
    }

    console.log(content);
});