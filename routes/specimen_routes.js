const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const router = express.Router();

var db = require('../util/db');

router.get('/totalCount', async function(req, res){
	try{
		var urls = [
			"http://intermountainbiota.org/portal/collections/misc/collprofiles.php?collid=16",
			"http://bryophyteportal.org/portal/collections/misc/collprofiles.php?collid=10",
			"http://lichenportal.org/portal/collections/misc/collprofiles.php?collid=30",
			"http://mycoportal.org/portal/collections/misc/collprofiles.php?collid=4"
		]
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
		res.json(total);
	}catch(err){
		res.json("ERROR IN PARSING PAGES")
	}
});

router.post("/insert", function(req, res){
	console.log("INSERT SPECIMEN: ", req.body);
});

module.exports = router;