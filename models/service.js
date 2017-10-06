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

exports.getReportNumbers = async function(year){
	return new Promise(async function(resolve, reject){
		try{
			var serviceTotals = await db.service.mapReduce(
				function(){
					emit(
						{
							serviceOrganization: this.serviceOrganization,
							serviceSubOrganization: this.serviceSubOrganization,
						},
						{
							charge: this.charge,
							time: this.time
						}
					)
				},
				function(key, values){
					return values.reduce(function(a, b){
						return 	{ charge: a.charge + b.charge, time: a.time + b.time};
					});
				},
				{
					query: {
						status: "Closed"
					},
					out: { inline: 1 }
				}
			);
			resolve(serviceTotals);
		}catch(err){
			reject(err);
		}
	});
}

// var test = async function(){
// 	var data = await exports.getReportNumbers(2017);
// 	console.log(data);
// }();