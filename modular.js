var fs = require('fs');
var mymodule = require('./mymodule.js');

var dirpath = process.argv[2];
var filterStr = process.argv[3];

mymodule(dirpath, filterStr, function (err, list) {
  if (err)
    return console.error("There was an error:", err)

  list.forEach(function (file) {
    console.log(file);
  });
});
