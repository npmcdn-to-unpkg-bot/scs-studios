var express = require('express');
var server = express();
server.get('scs-studios/', function(req, res){
    res.send('index.html');
});
server.listen(8080, function(){
    console.log("your a nigger fermin listening on port " + 8080);
});