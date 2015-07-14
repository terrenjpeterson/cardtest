// pull in libraries to create http server
var http = require('http');
var fs = require('fs');

//
console.log("Server Now Starting...");

//
var home_page = fs.readFileSync("index.html", 'utf8');

// start the server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
//  response.end("Hello World\n");
  response.end(home_page);
  console.log("Page just hit.");
});

// start the process of listening on a port
server.listen(8080);
