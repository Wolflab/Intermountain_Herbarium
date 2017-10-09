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
			year = parseInt(year);
			var visitationTotals = await db.usage.mapReduce(
				function(){
					emit(
						{
							usage: this.usage,
							subUsage: this.subUsage,
							organization: this.organization
						},
						this.count
					)
				},
				function(key, values){
					return Array.sum(values);
				},
				{
					query: {
						usage: "Other Visitation",
						fiscalYear: year
					},
					out: { inline: 1 }
				}
			);
			var usuVisitationTotals = await db.usage.mapReduce(
				function(){
					emit(
						{
							usage: this.usage,
							subUsage: this.subUsage,
							organization: this.organization
						},
						{
							studentCount: this.studentCount,
							facultyCount: this.facultyCount
						}
					)
				},
				function(key, values){
					return values.reduce(function(a, b){
						return 	{ 
							studentCount: a.studentCount + b.studentCount, 
							facultyCount: a.facultyCount + b.facultyCount
						};
					});
				},
				{
					query: {
						usage: "USU Visitation",
						fiscalYear: year
					},
					out: { inline: 1 }
				}
			);
			var groups = await db.usage.find({
				usage: "Group Usage",
				fiscalYear: year
			});
			var libraryTotals = await db.usage.mapReduce(
				function(){
					emit(
						{
							usage: this.usage,
							subUsage: this.subUsage
						},
						this.count
					)
				},
				function(key, values){
					return Array.sum(values);
				},
				{
					query: {
						usage: "Library Usage",
						fiscalYear: year
					},
					out: { inline: 1 }
				}
			); 
			for(var totals of [libraryTotals, visitationTotals, usuVisitationTotals]){
				for(var entry of totals){
					for(var key in entry._id){
						entry[key] = entry._id[key];
					}
					delete entry._id;
				}
			}
			resolve({
				groups: groups,
				libraryTotals: libraryTotals,
				visitationTotals: visitationTotals,
				usuVisitationTotals: usuVisitationTotals
			});
		}catch(err){
			reject(err);
		}
	});
}