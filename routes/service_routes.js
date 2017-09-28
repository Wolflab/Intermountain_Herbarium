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

// function wait(){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			resolve();	
// 		}, 3000);
// 	})
// }

router.post('/update', async function(req, res){
	var service = req.body;
	db.service.update(
		{_id: service._id},
		{$set: service},
	)
	.then(function(data){
		res.json(data);
	})
});

router.post('/insert', async function(req, res){
	db.service.insert(req.body)
	.then(function(data){
		res.json(data);
	})
});

module.exports = router;