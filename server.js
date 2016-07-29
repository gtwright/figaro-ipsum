var router = require('./router.js');
var querystring = require('querystring');

//Create a web server
var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
}).listen(process.env.PORT || 3000);
console.log('Server running');