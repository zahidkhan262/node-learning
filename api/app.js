var http = require('http');
var dt = require('./myfirstmodule');
var msg = require('./message');

let prn = new msg("khan", "boy")
console.log(prn.fullname())
console.log(prn)
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("The date and time are currently: " + dt.abcd);
  res.end("end program");
}).listen(8080);