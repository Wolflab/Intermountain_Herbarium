var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('../util/db');

router.get('/all', async function(req, res){
	res.json(await db.usage.find());
});

router.post('/insert', async function(req, res){
	res.json(await db.usage.insert(req.body));
});

module.exports = router;