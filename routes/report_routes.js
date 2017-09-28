var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('../util/db');

router.get('/all', async function(req, res){
	// res.json(await db.service.find({}));
});

router.post('/insert', function(req, res){
	// db.service.insert(req.body)
	// .then(function(data){
	// 	res.json(data);
	// })
});

module.exports = router;