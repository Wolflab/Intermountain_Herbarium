var db = require('../util/db');

var service = require('./service');
var specimen = require('./specimen');
var usage = require('./usage');

exports.insert = function(report){
	return db.reports.insert(report);
}

exports.update = function(report){
	return db.reports.update(
		{_id: report._id},
		{$set: report},
	);
}

exports.getAll = function(){
	return db.reports.find({ $query: {}, $orderby: { "report.fiscalYear" : -1 } });
}

exports.getInterimReport = function(){
	return new Promise(function(resolve, reject){
		try{
			resolve(interimReport())
		}catch(err){
			reject(err);
		}
	});
}

exports.getTotalSpecimen = function(fiscalYear){
	return new Promise(async function(resolve, reject){
		try{
			var report = await db.reports.find({fiscalYear: fiscalYear})[0].report;
			resolve(report.specimen.activities.totals.data.specimenTotal.inputs.count.value);
		}catch(err){
			reject(err);
		}
	}).catch(function(err){
		return null;
	});
}

exports.getDatabaseDataset = function(){
	return [
		{
			fiscalYear: 1990,
			specimenTotal: 100,
			totalEntered: 10,
			totalImaged: 1,
		},
		{
			fiscalYear: 1991,
			specimenTotal: 200,
			totalEntered: 20,
			totalImaged: 2,
		},
		{
			fiscalYear: 1992,
			specimenTotal: 300,
			totalEntered: 30,
			totalImaged: 3,
		},
		{
			fiscalYear: 1993,
			specimenTotal: 400,
			totalEntered: 40,
			totalImaged: 4,
		},
		{
			fiscalYear: 1994,
			specimenTotal: 500,
			totalEntered: 50,
			totalImaged: 5,
		},
		{
			fiscalYear: 1995,
			specimenTotal: 600,
			totalEntered: 60,
			totalImaged: 6,
		},
		{
			fiscalYear: 1996,
			specimenTotal: 700,
			totalEntered: 70,
			totalImaged: 7,
		},
	]
}

exports.getTotalDataset = function(){
	return [
		{
			fiscalYear: 1931,
			specimenTotal: 0
		},
		{
			fiscalYear: 1932,
			specimenTotal: 2147
		},
		{
			fiscalYear: 1933,
			specimenTotal: 2147
		},
		{
			fiscalYear: 1934,
			specimenTotal: 10599
		},
		{
			fiscalYear: 1935,
			specimenTotal: 15000
		},
		{
			fiscalYear: 1936,
			specimenTotal: 15000
		},
		{
			fiscalYear: 1938,
			specimenTotal: 23608
		},
		{
			fiscalYear: 1939,
			specimenTotal:23608
		},
		{
			fiscalYear: 1940,
			specimenTotal: 23608
		}
	]
}

var interimReport = async function(){
	var fiscalYear = new Date().getFullYear();
	if(new Date(fiscalYear + "/11/01") <= new Date())
		fiscalYear += 1; 

	var reportTemplate = Object.assign({}, template);
	var report = reportTemplate.report;
	// var database = report.specimen.activities.database;
	// database.data.totalEntered.inputs.specimens.value = await specimen.getTotal()
	// database.data.georeferenced.inputs.specimens.value = await specimen.getTotalGeoreferenced()
	// database.data.imaged.inputs.specimens.value = await specimen.getTotalImaged()
	
	// var serviceEntries = await service.getReportNumbers(fiscalYear);
	// for(var entry of serviceEntries){
	// 	var serviceActivites = report.service.activities;
	// 	for(var key in serviceActivites){
	// 		if(serviceActivites[key].title == entry._id.serviceOrganization){
	// 			for(var key2 in serviceActivites[key].data){
	// 				if(serviceActivites[key].data[key2].title == entry._id.serviceSubOrganization){
	// 					for(var key3 in entry.value){
	// 						if(serviceActivites[key].data[key2].inputs[key3]){
	// 							if(serviceActivites[key].data[key2].inputs[key3].value){
	// 								serviceActivites[key].data[key2].inputs[key3].value += entry.value[key3];
	// 							}else{
	// 								serviceActivites[key].data[key2].inputs[key3].value = entry.value[key3];
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	// var usageEntries = await usage.getReportNumbers(fiscalYear);
	// for(var entryKey in usageEntries){
	// 	var type = usageEntries[entryKey];
	// 	var temp = report.usage.activities;
	// 	for(var key in temp){
	// 		for(var entry of type){
	// 			if(temp[key].title == entry.usage){
	// 				for(var key2 in temp[key].data){
	// 					if(temp[key].data[key2].title == entry.subUsage){
	// 						if(entry.usage == "Group Usage"){
	// 							temp[key].data[key2].inputs.unshift(entry);
	// 						}else if(typeof entry.value == "object"){
	// 							for(var key3 in entry.value){
	// 								if(temp[key].data[key2].inputs[key3]){
	// 									if(temp[key].data[key2].inputs[key3].value)
	// 										temp[key].data[key2].inputs[key3].value += entry.value[key3];
	// 									else
	// 										temp[key].data[key2].inputs[key3].value = entry.value[key3];
	// 								}
	// 							}
	// 						}else if(typeof entry.value == "number"){
	// 							if(temp[key].data[key2].inputs['count'].value)
	// 								temp[key].data[key2].inputs['count'].value += entry.value;
	// 							else
	// 								temp[key].data[key2].inputs['count'].value = entry.value;
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	return reportTemplate;
}

var template = {
	fiscalYear: new Date().getFullYear(),
	date: new Date().toLocaleDateString(),
	report: {
		specimen: {
			title: "Specimen Activiy",
			activities: {
				totals: {
					data: {
						specimenTotal: {
							title: "Specimen Total",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						}
					}
				},
				collectionDevelopment: {
					title: "Collection Development",
					data: {
						exchangesReceived: {
							title: "Exchanges Received",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						exchangesSent: {
							title: "Exchanges Sent",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						giftsReceived: {
							title: "Gifts Received",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						staffCollections: {
							title: "Staff Collections",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						}
					}
				},
				database: {
					title: "Database",
					data: {
						totalEntered: {
							title: "Total Entered",
							inputs: {
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						georeferenced: {
							title: "Georeferenced",
							inputs: {
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						imaged: {
							title: "Imaged",
							inputs: {
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						imagesProcessed: {
							title: "Images Processed",
							inputs: {
								specimens: {
									placeholder: "Specimens"
								}
							}
						}
					}
				},
				otherSpecimenActivity: {
					title: "Other Specimen Activity",
					data: {
						loansSent: {
							title: "Loans Sent",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						loansRecieved: {
							title: "Loans Received",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						loansReturnedToUTC: {
							title: "Loans Returned to UTC",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						loansReturnedByUTC: {
							title: "Loans Returned by UTC",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						loansTransferredByUTC: {
							title: "Loans Transferred by UTC",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						localLoans: {
							title: "Local Loans",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						},
						photographicSlidesLoaned: {
							title: "Photographic Slides Loaned",
							inputs: {
								institutions: {
									placeholder: "Institutions/Individuals"
								},
								specimens: {
									placeholder: "Specimens"
								}
							}
						}
					}
				}
			}
		},
		service: {
			title: "Service Activiy",
			activities: {
				utahStateUniversity: {
					title: "Utah State University",
					data: {
						biology: {
							title: "Biology",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						naturalResources: {
							title: "Natural Resources",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						landscapeArchitecture: {
							title: "Landscape Architecture",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						plantsSoilsBiometeorology: {
							title: "Plants, Soils, & Biometeorology",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						extension: {
							title: "Extension",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						misc: {
							title: "Miscellaneous",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						utcDevelopment: {
							title: "UTC Development",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						}
					}
				},
				local: {
					title: "Local",
					data: {
						consultants: {
							title: "Consultants",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						schools: {
							title: "Schools",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						scouts: {
							title: "Scouts",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						generalPublic: {
							title: "General Public",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						misc: {
							title: "Miscellaneous",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						}
					}
				},
				federalAgencies: {
					title: "Federal Agencies",
					data: {
						usda: {
							title: "USDA [ARS, USFS, SCS]",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						usdi: {
							title: "USDI [NPS, BLM, NBS]",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						misc:{
							title: "Miscellaneous [NAS, DOD]",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						}
					}
				},
				other: {
					title: "Other",
					data: {
						commercialCompanies: {
							title: "Commercial Companies",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						foreignGovernments: {
							title: "Foreign Governments",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						nonProfitAgencies: {
							title: "Non-Profit Agencies",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						otherUniversities: {
							title: "Other Universities",
							inputs: {
								time: {
									name: "Time",
									placeholder: "Time"
								},
								requests: {
									name: "Requests",
									placeholder: "Requests"
								}
							}
						},
						stateOfUtah: {
							title: "State of Utah [UDOT, UNH]",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						},
						otherStates: {
							title: "Other States",
							inputs: {
								time: {
									placeholder: "Time"
								},
								requests: {
									placeholder: "Requests"
								}
							}
						}
					}
				}
			}
		},
		usage: {
			title: "Usage Activiy",
			activities: {
				libraryActivity: {
					title: "Library Usage",
					data: {
						itemsCheckedOut: {
							title: "Items Checked Out",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						visits: {
							title: "Visits",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						}
					}
				},
				usuVisitation: {
					title: "USU Visitation",
					data: {
						biology: {
							title: "Biology",
							inputs: {
								facultyCount: {
									placeholder: "Faculty Count"
								},
								studentCount: {
									placeholder: "Student Count"
								}
							}
						},
						naturalResources: {
							title: "Natural Resources",
							inputs: {
								facultyCount: {
									placeholder: "Faculty Count"
								},
								studentCount: {
									placeholder: "Student Count"
								}
							}
						},
						landscapeArchitecture: {
							title: "Landscape Architecture",
							inputs: {
								facultyCount: {
									placeholder: "Faculty Count"
								},
								studentCount: {
									placeholder: "Student Count"
								}
							}
						},
						plantsSoilsBiometeorology: {
							title: "Plants, Soils, & Biometeorology",
							inputs: {
								facultyCount: {
									placeholder: "Faculty Count"
								},
								studentCount: {
									placeholder: "Student Count"
								}
							}
						},
						extension: {
							title: "Extension",
							inputs: {
								facultyCount: {
									placeholder: "Faculty Count"
								},
								studentCount: {
									placeholder: "Student Count"
								}
							}
						},
						misc: {
							title: "Miscellaneous",
							inputs: {
								facultyCount: {
									placeholder: "Faculty Count"
								},
								studentCount: {
									placeholder: "Student Count"
								}
							}
						}
					}
				},
				otherVisitation: {
					title: "Other Visitation",
					data: {
						fedUsdi: {
							title: "Federal Agency USDI",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						fedUsda: {
							title: "Federal Agency USDA",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						commercial: {
							title: "Commercial",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						consultants: {
							title: "Consultants",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						otherUniversities: {
							title: "Other Herbaria and Universities",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						nonProfitAgencies: {
							title: "Non-Profit Agencies",
							inputs: {
								count:	{
									placeholder: "Count"
								}
							}
						},
						public: {
							title: "Public",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						boyScouts: {
							title: "Boy Scouts",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						stateOfUtah: {
							title: "State of Utah",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						otherMisc: {
							title: "Miscellaneous",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						}
					}
				},
				groupUsage: {
					title: "Group Usage",
					data: {
						classUsage: {
							title: "Class Usage",
							openEnded: true,
							inputs: [
								{
									placeholder: "Name"
								}
							]
						},
						otherCampusGroups: {
							title: "Other Campus Groups",
							openEnded: true,
							inputs: [
								{
									placeholder: "Name"
								}
							]
						},
						otherNonCampusGroups: {
							title: "Other Non-Campus Groups",
							openEnded: true,
							inputs: [
								{
									placeholder: "Name"
								}
							]
						}
					}
				}
			}
		},
		facebook: {
			title: "Facebook Activiy",
			activities: {
				stats: {
					data: {
						pageLikes: {
							title: "Page Likes",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						reachUtah: {
							title: "Reach - Utah",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						reachUSA: {
							title: "Reach - USA & territories",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						reachNonUS: {
							title: "Reach - Non US",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						numberOfPosts: {
							title: "Number of Posts",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						postReachMax: {
							title: "Post Reach (Max)",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						postReachAverage: {
							title: "Post Reach (Average)",
							inputs: {
								count: {
									name: "Count",
									placeholder: "Count"
								}
							}
						},
						postEngagementMax: {
							title: "Post Engagement (Max)",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						},
						postEngagementAverage: {
							title: "Post Engagement (Average)",
							inputs: {
								count: {
									placeholder: "Count"
								}
							}
						}
					}
				}
			}
		}
	}
}