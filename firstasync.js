var fs = require('fs');

function readLines(callback) {
fs.readFile(process.argv[2], function (err, contents) {
    var lines = contents.toString().split("\n").length -1;
    callback();
  })
}

function total() {
  console.log(lines.length -1);
}

readLines(total);
