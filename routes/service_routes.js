var express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const service = require('../models/service');

router.get('/all', async function(req, res){
	res.json(await service.getAll());
});

router.get('/open', async function(req, res){
	res.json(await service.getOpen());
});

router.post('/update', async function(req, res){
	res.json(await service.update(req.body));
});

router.post('/insert', async function(req, res){
	res.json(await service.insert(req.body));
});

module.exports = router;