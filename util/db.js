//Connect to the DB
var db = require('monk')(process.env.MONGOUSER + ':' + process.env.MONGOPASS + '@localhost/Herbarium', {authSource:'admin'});

db.catch(function(err) {
	clog.i("MONGO AUTHENTICATION FAILED, go to db.js and make sure you have the right db commented out.");
	process.exit(1);
});


//Export the collections to be used.
exports.service = db.get('Service');
exports.specimen = db.get('Specimen');
exports.visitor = db.get('Visitor');