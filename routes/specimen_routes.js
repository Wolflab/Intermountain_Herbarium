var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();

const DIR = './uploads/';
var upload = multer({dest: DIR});

router.get('/totalCount', function(req, res){
	res.json(4);
});

router.post("/insert", function(req, res){
	console.log("SPECIMEN: ", req.body);
	// upload(req, res, function (err) {
	// 	if (err) {
	// 	  return res.end(err.toString());
	// 	}
	 
	// 	res.end('File is uploaded');
	//   });
});

module.exports = router;