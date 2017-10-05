const db = require('../util/db');

exports.getAll = function(){
	db.usage.find()
}

exports.insert = function(usage){
	return db.usage.insert(usage);
}