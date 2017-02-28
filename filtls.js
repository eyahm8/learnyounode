var fs = require('fs');
var path = require('path');

var dirpath = process.argv[2];
var filterStr = process.argv[3];

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + ext;
};


fs.readdir(dirpath, function (err, list) {
    list.filter(extension).forEach(function(value) {
      console.log(value);
    });
  });
