'user strict';

var express = require('express');
var ipsum = require('./ipsum.js');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/static', express.static( __dirname + '/public'));

app.get('/', function(req, res){
	var paragraph = req.query.p || 4
	res.render('index', {message: ipsum(paragraph),
		selected: paragraph
	});
});

app.get('/ipsum/', function(req, res){
	var paragraph = req.query.p || 4
	res.send(ipsum(paragraph));
});

var port = process.env.PORT || 3000;
app.listen(port);