var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('../util/db');

router.get('/all', async function(req, res){
	res.json(await db.service.find({}));
});

router.get('/open', async function(req, res){
	res.json(await db.service.find({status: "Open"}));
});

router.post('/update', async function(req, res){
	var service = req.body;
	var data = await db.service.update(
		{_id: service._id},
		{$set: service},
	);
	res.json(data);
});

router.post('/insert', async function(req, res){
	var data = await db.service.insert(req.body);
	res.json(data);
});

module.exports = router;