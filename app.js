// Library Imports
const express = require('express');
const bodyParser = require('body-parser');

// Express Setup
const router = express.Router();
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next){
	const route = req.path.split('/')[1];
	if(route == 'reports'){
		if(req.headers.key == process.env.adminKey){
			next();
		}else if(req.headers.key == process.env.userKey){
			res.sendStatus(401);
		}else{
			res.sendStatus(401);
		}
	}else if(route == 'service'){
		if(req.headers.key == process.env.adminKey){
			next();
		}else if(req.headers.key == process.env.userKey){
			next();
		}else{
			res.sendStatus(401);
		}
	}else if(route == 'usage'){
		if(req.headers.key == process.env.adminKey){
			next();
		}else if(req.headers.key == process.env.userKey){
			next();
		}else{
			res.sendStatus(401);
		}
	}else{
		next();
	}
});

app.get('/test', function (req,res) {
	res.send('I can be reached only using an authorised api key.')
})

const loginRouter = require('./routes/login_routes');
const graphRouter = require('./routes/graph_routes');
const reportRouter = require('./routes/report_routes');
const serviceRouter = require('./routes/service_routes');
const specimenRouter = require('./routes/specimen_routes');
const usageRouter = require('./routes/usage_routes');
// app.use('/facebook', facebookRouter);
app.use('/login', loginRouter);
app.use('/graph', graphRouter);
app.use('/reports', reportRouter);
app.use('/service', serviceRouter);
app.use('/specimen', specimenRouter);
app.use('/usage', usageRouter);
app.use('/', express.static('./public/dist'));
app.use('*', express.static('./public/dist'));


const port = 8080;
app.listen(port, function () {
	// clog.i('TESTR V' + pjson.version + ' has started on port '+ port);
	console.log("Server started on port ", port);
});

// const fb = require('./util/fb');