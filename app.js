var router = require('./router.js');
var querystring = require('querystring');

//Create a web server
var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
}).listen(3000);
console.log('Server running on port 3000');