
var fs = require('fs')
var path = require('path')


module.exports = function (dirpath, filterStr, callback) {

  fs.readdir(dirpath, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list);
  });
};
