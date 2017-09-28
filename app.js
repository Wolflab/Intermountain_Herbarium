// Library Imports
var express = require('express');
var bodyParser = require('body-parser');

// Express Setup
var router = express.Router();
var app = express();
app.use(bodyParser.json());

// var facebookRouter = require('./routes/facebook_routes');
var reportRouter = require('./routes/report_routes');
var serviceRouter = require('./routes/service_routes');
var specimenRouter = require('./routes/specimen_routes');
var uploadRouter = require('./routes/upload_routes');
var usageRouter = require('./routes/usage_routes');
// app.use('/facebook', facebookRouter);
app.use('/report', reportRouter);
app.use('/service', serviceRouter);
app.use('/specimen', specimenRouter);
app.use('/upload', uploadRouter);
app.use('/usage', usageRouter);
app.use('/', express.static('./public/dist'));
app.use('*', express.static('./public/dist'));


var port = 8080;
app.listen(port, function () {
	// clog.i('TESTR V' + pjson.version + ' has started on port '+ port);
	console.log("Server started on port ", port);
});

var fb = require('./util/fb');