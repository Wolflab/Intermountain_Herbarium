const db = require('../util/db');

exports.getAll = function(){
	return db.service.find();
}

exports.getOpen = function(){
	return db.service.find({status: "Open"});
}

exports.update = function(service){
	return db.service.update(
		{_id: service._id},
		{$set: service},
	);
}

exports.insert = function(service){
	return db.service.insert(service);
}