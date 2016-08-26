var http = require('http');
var through = require('through2');

var makeUpperCase = through(function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

var server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(makeUpperCase).pipe(res);
  }
});

server.listen(process.argv[2]);
