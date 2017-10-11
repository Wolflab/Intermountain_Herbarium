const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const graph = require('../models/graph');

router.get('/svg', async function(req, res){
	graph.createGraph(function(){
		res.download(__dirname + '/../output/output.svg', 'svgOutput.svg');
	});
});

router.get('/png', async function(req, res){
	graph.createGraph(function(){
		res.download(__dirname + '/../output/output.png', 'pngOutput.png');
	});
});

module.exports = router;