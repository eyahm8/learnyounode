// var net = require('net')
// var port = process.argv[2]
// //var server = net.createServer(function (socket) {
//
// //})
//
//
// var myDate = new Date();
// var dateString;
// // var y = date.getFullYear();
// // var m = date.getMonth() + 1;
// // var d = date.getDate().toString();
// // var hh = date.getHours();
// // var mm = date.getMinutes();
//
//
// myDate.setDate(myDate.getDate() + 20);
// dateString = myDate.getFullYear() + ('0' + (myDate.getMonth()+1)).slice(-2) + ('0' + myDate.getDate()).slice(-2);
//
//
// //server.listen(port);
//
// //socket.end()
// console.log(dateString);
// console.log(typeof d);


var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
