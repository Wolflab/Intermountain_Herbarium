var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var fb = require('fb');
fb = new FB.Facebook(options);

router.get('/info', function(req, res){
	FB.api(
		"/{page-id}/likes",
		function (response) {
		  if (response && !response.error) {
			/* handle the result */
			console.log(response);;
		  }
		}
	);
	res.json(4);
});


module.exports = router;