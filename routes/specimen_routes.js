const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const specimen = require('../models/specimen');

router.get('/all_totals', async function(req, res){
	var totals = {
		totalCount: await specimen.getTotal(),
		totalGeoreferenced: await specimen.getTotalGeoreferenced(),
		totalImaged: await specimen.getTotalImaged(),
		totalIdentified: await specimen.getTotalIdentified()
	}

	res.json(totals);
});

router.get('/total_count', async function(req, res){
	res.json(await specimen.getTotal());
});

router.get('/total_georeferenced', async function(req, res){
	res.json(await specimen.getTotalGeoreferenced());
});

router.get('/total_imaged', async function(req, res){
	res.json(await specimen.getTotalImaged());
});

router.get('/total_identified', async function(req, res){
	res.json(await specimen.getTotalIdentified());
});


module.exports = router;