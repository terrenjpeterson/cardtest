// pull in appropriate nodejs libraries to create http server and read filesystems
var express = require('express');
var http = require('http');
var fs = require('fs');

// basic logging to alert that the server works
console.log("Server Now Starting...");

// start the app server and respond to requests by serving back the file read into the app server
var app = express();

var server = http.createServer(app);

// read the file into memory of the app server
var home_page = fs.readFileSync("solicit.html", 'utf8');

// this gets static files linked so that they may be served in get requests
app.use('/js', express.static(__dirname + '/js'));

// respond to http requests
app.get('/', function(req, res){
    res.send(home_page);
    console.log("Page just hit.");
});

app.get('/index.html', function(req, res) {
   res.send(home_page);
   console.log("Page just hit.");
});

// start the process of listening on a port
server.listen(8080);
