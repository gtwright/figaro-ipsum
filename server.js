'user strict';

var express = require('express');
var ipsum = require('./ipsum.js');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index', {message: ipsum(req.query.p)});
});

app.listen(3000);