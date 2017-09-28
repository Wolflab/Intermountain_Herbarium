const request = require('request-promise');


const urls = [
	"http://intermountainbiota.org/portal/collections/misc/collprofiles.php?collid=16",
	"http://bryophyteportal.org/portal/collections/misc/collprofiles.php?collid=10",
	"http://lichenportal.org/portal/collections/misc/collprofiles.php?collid=30",
	"http://mycoportal.org/portal/collections/misc/collprofiles.php?collid=4"
]

exports.getTotal = function(){
	return new Promise(async function(resolve, reject){
		try{
			var promises = [];
			for(url of urls){
				promises.push(request(url));
			}
			var values = await Promise.all(promises);
			var total = 0;
			for(value of values){
				const regex = /(\d*) specimen records/g;
				var temp = value.replace(/,/g, '');
				total += parseInt(regex.exec(temp)[1]);
			}
			resolve(total);
		}catch(err){
			reject("ERROR IN PARSING PAGES: ", err)
		}
	});
}

exports.getTotalGeoreferenced = function(){
	return new Promise(async function(resolve, reject){
		try{
			var promises = [];
			for(url of urls){
				promises.push(request(url));
			}
			var values = await Promise.all(promises);
			var total = 0;
			for(value of values){
				const regex = /(\d*) \(.*\) georeferenced/g;
				var temp = value.replace(/,/g, '');
				total += parseInt(regex.exec(temp)[1]);
			}
			resolve(total);
		}catch(err){
			reject("ERROR IN PARSING PAGES: ", err)
		}
	});
}

exports.getTotalImaged = function(){
	return new Promise(async function(resolve, reject){
		try{
			var promises = [];
			for(url of urls){
				promises.push(request(url));
			}
			var values = await Promise.all(promises);
			var total = 0;
			for(value of values){
				const regex = /(\d*) \(.*\) with images/g;
				var temp = value.replace(/,/g, '');
				var result = regex.exec(temp);
				if(result)
					total += parseInt(result[1]);
			}
			resolve(total);
		}catch(err){
			reject("ERROR IN PARSING PAGES: ", err)
		}
	});
}

exports.getTotalIdentified = function(){
	return new Promise(async function(resolve, reject){
		try{
			var promises = [];
			for(url of urls){
				promises.push(request(url));
			}
			var values = await Promise.all(promises);
			var total = 0;
			for(value of values){
				const regex = /(\d*) \(.*\) identified to species/g;
				var temp = value.replace(/,/g, '');
				total += parseInt(regex.exec(temp)[1]);
			}
			resolve(total);
		}catch(err){
			reject("ERROR IN PARSING PAGES: ", err)
		}
	});
}