var through = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();

var makeUpperCase = through(function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

stream.pipe(makeUpperCase).pipe(stream);

tr.pipe(process.stdout);
