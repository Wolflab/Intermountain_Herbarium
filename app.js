// Library Imports
var express = require('express');
var bodyParser = require('body-parser');

// Express Setup
var router = express.Router();
var app = express();

app.use(bodyParser.json());
app.use(express.static('./public/dist'));

var facebookRouter = require('./routes/facebook_routes');
var serviceRouter = require('./routes/service_routes');
var specimenRouter = require('./routes/specimen_routes');
var usageRouter = require('./routes/usage_routes');
app.use('/facebook', facebookRouter);
app.use('/service', serviceRouter);
app.use('/specimen', specimenRouter);
app.use('/usage', usageRouter);



var multer = require('multer');
var upload = multer({ dest: './uploads/' })

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
  });


	app.post('/upload', upload.array('photos', 12), function (req, res, next) {
		console.log("files: ", req.files);
		console.log("body: ", req.body);
		res.end('uploaded');
		// req.files is array of `photos` files 
		// req.body will contain the text fields, if there were any 
	})

var port = 3000;
app.listen(port, function () {
	// clog.i('TESTR V' + pjson.version + ' has started on port '+ port);
	console.log("Server started on port ", port);
});