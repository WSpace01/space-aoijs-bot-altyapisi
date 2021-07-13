var http = require("http");
http.createServer(function(req, res){
res.write("Space Code Share"); 
res.end();
}).listen(8080);
