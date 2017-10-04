var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('../util/db');

router.get('/:year', async function(req, res){
	console.log("YEAR:", req.params.year)
	res.json(await db.service.find({year: req.params.year}));
});

router.get('/interim', async function(req, res){
	// res.json(await db.service.find({}));
});

router.get('/all', async function(req, res){
	res.json(await db.report.find());
});


module.exports = router;