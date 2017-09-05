// Library Imports
var express = require('express');
var bodyParser = require('body-parser');

// Express Setup
var router = express.Router();
var app = express();

app.use(bodyParser.json());
app.use(express.static('./public/dist'));

// var deviceRouter = require('./routes/device_routes');
// app.use('/devices', deviceRouter);

var port = 3000;
app.listen(port, function () {
	// clog.i('TESTR V' + pjson.version + ' has started on port '+ port);
	console.log("Server started on port ", port);
});