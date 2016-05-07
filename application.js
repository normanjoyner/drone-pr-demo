var express = require("express");
var server = express();

server.get("/", function(req, res, next){
    var message = [
        "Running",
        "application",
        process.env.CS_APPLICATION || "drone-pr-demo"
    ]

    res.send(message.join(" "));
});

server.listen(process.env.PORT || 8080);
