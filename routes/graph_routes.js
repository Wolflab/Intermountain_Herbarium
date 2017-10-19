const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const graph = require('../models/graph');

router.get('/database/svg', async function(req, res){
	graph.createDatabaseGraph(function(){
		res.download(__dirname + '/../output/output.svg', 'svgOutput.svg');
	});
});

// router.get('/database/png', async function(req, res){
// 	graph.createDatabaseGraph(function(){
// 		res.download(__dirname + '/../output/output.png', 'pngOutput.png');
// 	});
// });

router.get('/total/svg', async function(req, res){
	graph.createTotalGraph(function(){
		res.download(__dirname + '/../output/output.svg', 'svgOutput.svg');
	});
});

// router.get('/total/png', async function(req, res){
// 	graph.createTotalGraph(function(){
// 		res.download(__dirname + '/../output/output.png', 'pngOutput.png');
// 	});
// });

router.get('/report/:year', async function(req, res){
	graph.createCsv(req.params.year, function(){
		res.download(__dirname + '/../output/report.csv', 'report.csv');
	});
});

module.exports = router;