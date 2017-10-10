const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const reports = require('../models/reports');

router.get('/interim', async function(req, res){
	res.json(await reports.getInterimReport());
});

router.post('/update', async function(req, res){
	res.json(await reports.update(req.body));
});

router.get('/all', async function(req, res){
	res.json(await reports.getAll());
});

router.post('/insert', async function(req, res){
	res.json(await reports.insert(req.body));
});

module.exports = router;