var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var getString = function(){
    var buff = fs.readFileSync("index.html");
    return buff.toString();

 };



app.get('/', function(request, response) {
  response.send(getString());
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
