// Create web server

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var path = url_parts.pathname;

  if (path === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(fs.readFileSync("index.html"));
  } else if (path === "/comments") {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(query));
  }
});

// Listen on port 8000, IP defaults to