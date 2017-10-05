const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const usage = require('../models/usage');

router.get('/all', async function(req, res){
	res.json(await usage.getAll());
});

router.post('/insert', async function(req, res){
	res.json(await usage.insert(req.body));
});

module.exports = router;