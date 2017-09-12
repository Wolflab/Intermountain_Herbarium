var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();




// var FB = require('fb');

// //Herbarium page id: 185929428100141

// var config = require('../config.json');
// var fb = new FB.Facebook({ 
// 	appId            : '1945210372414793',
// 	// autoLogAppEvents : true,
// 	// status           : true,
// 	// xfbml            : true,
// 	version          : 'v2.10'
// });
// console.log(fb.getAuthResponse());
// FB.setAccessToken('0b2510848277748277f30fa47f8e0ef1');
// // fb.AppEvents.logPageView();
// // console.log(fb.logPageView);


// console.log("FB Page:", config.fbPageId);
// FB.api(
// 	"/412065968905812/likes",
// 	function (response) {
// 		console.log(response);
// 	  if (response && !response.error) {
// 		/* handle the result */
// 		console.log(response);;
// 	  }
// 	}
// );



// router.get('/info', function(req, res){
// 	FB.api(
// 		"/{page-id}/likes",
// 		function (response) {
// 		  if (response && !response.error) {
// 			/* handle the result */
// 			console.log(response);;
// 		  }
// 		}
// 	);
// 	res.json(4);
// });


module.exports = router;