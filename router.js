var Ipsum = require('./ipsum.js');
var url = require('url');


var basicHeader = {'Content-type':'text/html'};

function home(req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	var paragraphs = parseInt(query['q']);

	var ipsum = Ipsum(paragraphs);
	res.writeHeader(200, basicHeader);
	res.write(ipsum);
	res.end();
}

module.exports.home = home; 