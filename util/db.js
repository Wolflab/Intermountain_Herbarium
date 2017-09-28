//Connect to the DB
var db = require('monk')(process.env.MONGOUSER + ':' + process.env.MONGOPASS + '@localhost/Herbarium', {authSource:'admin'});
// var db = require('monk')('localhost/Herbarium');

db.catch(function(err) {
	console.log("MONGO AUTHENTICATION FAILED, go to db.js and make sure you have the right db commented out.");
	process.exit(1);
});


//Export the collections to be used.
exports.report = db.get('Report');
exports.service = db.get('Service');
exports.specimen = db.get('Specimen');
exports.usage = db.get('Usage');
