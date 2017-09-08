var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/totalCount', function(req, res){
	res.json(4);
});

router.post("/insert", function(req, res){
	console.log("INSERT SPECIMEN: ", req.body);
});

module.exports = router;