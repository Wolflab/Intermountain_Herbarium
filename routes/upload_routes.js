var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var router = express.Router();

const DIR = './uploads/';
var upload = multer({ dest: DIR })
var type = upload.single('uploadFile');

router.post('/', type, function (req, res) {
	console.log("body: ", req.body);
	console.log("files: ", req.file);
	res.json({src: DIR + req.file.filename});
	// req.files is array of `photos` files 
	// req.body will contain the text fields, if there were any 
})

router.get('/:uploadId', function(req, res){
	console.log("ID: ", req.params.uploadId);
	res.sendFile(path.resolve(__dirname + '/.' + DIR + req.params.uploadId));
});

module.exports = router;