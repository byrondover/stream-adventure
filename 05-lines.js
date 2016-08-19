var split = require('split');
var through = require('through2');

var lineNumber = 1;

var stream = through((buffer, encoding, next) => {
  var formattedLine = buffer.toString();

  if (lineNumber % 2 === 0)
    formattedLine = formattedLine.toUpperCase();
  else
    formattedLine = formattedLine.toLowerCase();

  lineNumber++;
  console.log(formattedLine);
  next();
});

process.stdin.pipe(split()).pipe(stream);
