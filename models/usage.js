const db = require('../util/db');

exports.getAll = function(){
	db.usage.find()
}

exports.insert = function(usage){
	return db.usage.insert(usage);
}

exports.getReportNumbers = function(year){
	return new Promise(async function(resolve, reject){
		try{
			// var visitationTotals = await db.usage.mapReduce(
			// 	function(){
			// 		emit(
			// 			this.subUsage,
			// 			{
			// 				charge: this.charge,
			// 				time: this.time
			// 			}
			// 		)
			// 	},
			// 	function(key, values){
			// 		return values.reduce(function(a, b){
			// 			return 	{ charge: a.charge + b.charge, time: a.time + b.time};
			// 		});
			// 	},
			// 	{
			// 		query: {
			// 			usage: "Visitation"
			// 		},
			// 		out: { inline: 1 }
			// 	}
			// );
			var groups = await db.usage.find({usage: "Group Usage"});
			var libraryTotals = await db.usage.mapReduce(
				function(){
					emit(
						this.subUsage,
						this.count
					)
				},
				function(key, values){
					return Array.sum(values);
				},
				{
					query: {
						usage: "Library Usage"
					},
					out: { inline: 1 }
				}
			); 
			console.log(libraryTotals);
			resolve();
		}catch(err){
			reject(err);
		}
	});
}

var asdf = function(){
	exports.getReportNumbers(1999);
}();