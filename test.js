// pull in appropriate nodejs libraries to create http server and read filesystems
var http = require('http');
var fs = require('fs');

// basic logging to alert that the server works
console.log("Server Now Starting...");

// read the file into memory of the app server
var home_page = fs.readFileSync("index.html", 'utf8');

// start the app server and respond to requests by serving back the file read into the app server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(home_page);
  console.log("Page just hit.");
});

// start the process of listening on a port
server.listen(8080);
