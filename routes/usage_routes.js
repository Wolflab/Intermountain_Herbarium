var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('../util/db');

router.get('/all', function(req, res){
	// console.log("get all Services: ", req.body);
});

router.post('/insert', async function(req, res){
	var data = await db.usage.insert(req.body);
	res.json(data);
});

module.exports = router;