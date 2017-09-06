// Library Imports
var express = require('express');
var bodyParser = require('body-parser');

// Express Setup
var router = express.Router();
var app = express();

app.use(bodyParser.json());
app.use(express.static('./public/dist'));

var serviceRouter = require('./routes/service_routes');
var specimenRouter = require('./routes/specimen_routes');
var visitorRouter = require('./routes/visitor_routes');
app.use('/service', serviceRouter);
app.use('/specimen', specimenRouter);
app.use('/visitor', visitorRouter);

var port = 3000;
app.listen(port, function () {
	// clog.i('TESTR V' + pjson.version + ' has started on port '+ port);
	console.log("Server started on port ", port);
});