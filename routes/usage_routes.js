var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('../util/db');

router.get('/all', function(req, res){
	// console.log("get all Services: ", req.body);
});

router.post('/insert', function(req, res){
	console.log("INSERT usage: ", req.body);
});

module.exports = router;