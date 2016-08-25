var concat = require('concat-stream');

process.stdin.pipe(concat((data) => {
  foo = data.toString()
  bar = foo.split('').reverse().join('');
  process.stdout.write(bar)
}));
