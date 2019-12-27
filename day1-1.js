var http = require('http');

var caculator = require('./cal.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Guys... !!!!' + caculator.add(10,20));
}).listen(8081);

console.log('server started');